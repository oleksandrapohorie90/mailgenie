import { prisma } from "@/lib/prisma";

export async function getSubscriptionPlan(userId: string) {
  const subscription = await prisma.billings.findUnique({
    where: { id: userId },
    select: { plan: true },
  });

  if (!subscription) return null;

  const planLimits = { free: 3, pro: 10, enterprise: 20 };
  return { maxDomains: planLimits[subscription.plan as keyof typeof planLimits] || 3 };
}

