// "use server";
// import { auth } from "@clerk/nextjs/server"; 
// import { prisma } from "@/lib/prisma"; 
// import { getSubscriptionPlan } from "@/lib/subscription";

// export const onIntegrateDomain = async (domain: string, icon: string) => {
//   const { userId } = await auth();
//   if (!userId) return { status: 401, message: "Unauthorized" };

//   try {
//     const subscription = await getSubscriptionPlan(userId);
//     if (!subscription) return { status: 403, message: "Subscription required" };

//     const domainCount = await prisma.domain.count({ where: { userId } });
//     if (domainCount >= subscription.maxDomains) {
//       return { status: 403, message: "Domain limit reached" };
//     }

//     const existingDomain = await prisma.domain.findFirst({
//       where: { name: domain, userId },
//     });

//     if (existingDomain) return { status: 409, message: "Domain already exists" };

//     await prisma.domain.create({
//       data: {
//         name: domain,
//         icon,
//         userId,
//         campaignId: "defaultCampaignId", // Placeholder
//       },
//     });

//     return { status: 200, message: "Domain successfully added" };
//   } catch (error) {
//     console.error("Database error:", error);
//     return { status: 500, message: "Internal Server Error" };
//   }
// };
