"use client";

import { UserButton } from "@clerk/nextjs";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 className="text-xl font-semibold">{title}</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}