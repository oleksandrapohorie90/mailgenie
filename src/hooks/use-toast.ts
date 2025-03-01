// import { useCallback } from "react";
// import { toast as sonner } from "sonner"; // Using `sonner` for notifications

// export const useToast = () => {
//   const toast = useCallback(({ title, description }: { title: string; description: string }) => {
//     sonner(title, { description });
//   }, []);

//   return { toast };
// };

// import { useCallback } from "react";
// import { toast } from "sonner";

// export const useToast = () => {
//     const showToast = useCallback(({ title, description }: { title: string; description: string }) => {
//       toast(title, { description }); // Use `toast` directly
//     }, []);
  
//     return { toast: showToast };
//   };

  import { toast } from "sonner";

export const useToast = () => {
  return {
    toast: ({ title, description }: { title: string; description: string }) => {
      toast(title, {
        description,
      });
    },
  };
};
  