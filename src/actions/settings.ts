"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const onIntegrateDomain = async (
  campaignId: string,
  domain: string,
  icon: string
) => {
  const { userId } = await auth();
  if (!userId) return { status: 401, message: "Unauthorized" };

  try {
    const dbUser = await prisma.user.findFirst({
      where: { clerkId: userId },
      include: {
        domains: true,
        billings: {
          orderBy: { id: "desc" },
          take: 1,
        },
        campaigns: {
          take: 1,
        },
      },
    });

    if (!dbUser) {
      return { status: 404, message: "User not found" };
    }

    // Check if the domain already exists
    const existingDomain = await prisma.domain.findFirst({
      where: {
        name: domain,
        userId: dbUser.id,
      },
    });

    if (existingDomain) {
      return { status: 400, message: "Domain already exists" };
    }

    // Check the subscription plan and enforce limits
    const currentPlan = dbUser.billings[0]?.plan || "free";
    const domainLimit =
      currentPlan === "pro" ? 10 : currentPlan === "enterprise" ? -1 : 3;

    if (domainLimit !== -1 && dbUser.domains.length >= domainLimit) {
      return {
        status: 403,
        message: `You've reached the maximum number of domains for your ${currentPlan} plan`,
      };
    }

    // Get or create a default campaign
    let targetCampaignId = campaignId;
    if (!targetCampaignId) {
      const defaultCampaign =
        dbUser.campaigns[0] ||
        (await prisma.campaign.create({
          data: {
            name: "Default Campaign",
            customers: [],
            userId: dbUser.id,
          },
        }));
      targetCampaignId = defaultCampaign.id;
    }

    // Create a new domain entry and link it to the user
    const newDomain = await prisma.domain.create({
      data: {
        name: domain,
        icon,
        userId: dbUser.id,
        campaignId: targetCampaignId,
      },
    });

    revalidatePath("/dashboard");
    return {
      status: 200,
      message: "Domain successfully added",
      domain: newDomain,
    };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
};

//================================================
// "use server";

// import { auth } from "@clerk/nextjs/server"; //why auth here ?
// import { prisma } from "@/lib/prisma"; 
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// export const AddDomainSchema = z.object({
//   domain: z.string().min(3, "Domain name is too short").max(255, "Domain name is too long"),
//   icon: z.any(), // Accepts file uploads
// });

// export type AddDomainInput = z.infer<typeof AddDomainSchema>;

// export const onIntegrateDomain = async (
//   campaignId: string,
//   domain: string,
//   icon: string
// ) => {
//   const { userId } = await auth();
//   if (!userId) return { status: 401, message: "Unauthorized" };

//   try {
//     const dbUser = await prisma.user.findFirst({
//       where: { clerkId: userId },
//       include: {
//         domains: true,
//         billings: {
//           orderBy: { id: "desc" },
//           take: 1,
//         },
//         campaigns: {
//           take: 1,
//         },
//       },
//     });

//     if (!dbUser) {
//       return { status: 404, message: "User not found" };
//     }

//     // Check if the domain already exists
//     const existingDomain = await prisma.domain.findFirst({
//       where: {
//         name: domain,
//         userId: dbUser.id,
//       },
//     });

//     if (existingDomain) {
//       return { status: 400, message: "Domain already exists" };
//     }

//     // Check the subscription plan and enforce limits
//     const currentPlan = dbUser.billings[0]?.plan || "free";
//     const domainLimit =
//       currentPlan === "pro" ? 10 : currentPlan === "enterprise" ? -1 : 3;

//     if (domainLimit !== -1 && dbUser.domains.length >= domainLimit) {
//       return {
//         status: 403,
//         message: `You've reached the maximum number of domains for your ${currentPlan} plan`,
//       };
//     }

//     // Get or create a default campaign
//     let targetCampaignId = campaignId;
//     if (!targetCampaignId) {
//       const defaultCampaign =
//         dbUser.campaigns[0] ||
//         (await prisma.campaign.create({
//           data: {
//             name: "Default Campaign",
//             customers: [],
//             userId: dbUser.id,
//           },
//         }));
//       targetCampaignId = defaultCampaign.id;
//     }

//     // Create a new domain entry and link it to the user
//     const newDomain = await prisma.domain.create({
//       data: {
//         name: domain,
//         icon,
//         userId: dbUser.id,
//         campaignId: targetCampaignId,
//       },
//     });

//     revalidatePath("/dashboard");
//     return {
//       status: 200,
//       message: "Domain successfully added",
//       domain: newDomain,
//     };
//   } catch (error) {
//     console.error(error);
//     return { status: 500, message: "Internal Server Error" };
//   }
// };