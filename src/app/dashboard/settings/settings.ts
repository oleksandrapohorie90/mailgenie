"use server";
import { auth } from "@clerk/nextjs/server"; // Fixing incorrect useAuth call
import { prisma } from "@/lib/prisma"; 
import { getSubscriptionPlan } from "@/lib/subscription";

export const onIntegrateDomain = async (domain: string, icon: string) => {
  const { userId } = await auth(); // Fix: use auth() instead of useAuth()
  if (!userId) return { status: 401, message: "Unauthorized" };

  try {
    // Fetch the user's subscription plan
    const subscription = await getSubscriptionPlan(userId);
    if (!subscription) return { status: 403, message: "Subscription required" };

    // Count current domains linked to the user
    const domainCount = await prisma.domain.count({
      where: { userId },
    });

    // Enforce domain limits based on the subscription plan
    const maxDomains = subscription.maxDomains;
    if (domainCount >= maxDomains) {
      return { status: 403, message: "Domain limit reached" };
    }

    // Check if the domain already exists for the user
    const existingDomain = await prisma.domain.findFirst({
      where: { name: domain, userId },
    });
    if (existingDomain) {
      return { status: 409, message: "Domain already exists" };
    }

    // Create a new domain entry
    await prisma.domain.create({
      data: {
        name: domain,
        icon,
        userId,
        campaignId: "defaultCampaignId", // Replace with actual campaignId if available
      },
    });

    return { status: 200, message: "Domain successfully added" };
  } catch (error) {
    console.error("Error adding domain:", error);
    return { status: 500, message: "Internal Server Error" };
  }
};
