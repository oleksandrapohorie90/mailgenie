"use client";

import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type AppDrawerProps = {
  title: string;
  description?: string;
  children: ReactNode;
  trigger: ReactNode;
};

const AppDrawer = ({ title, description, children, trigger }: AppDrawerProps) => {
  return (
    <Dialog>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AppDrawer;
