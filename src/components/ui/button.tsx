import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            default: "bg-blue-500 text-white hover:bg-blue-600",
            outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
            ghost: "bg-transparent hover:bg-gray-100",
            link: "text-blue-500 underline-offset-4 hover:underline",
          }[variant],
          {
            default: "h-10 px-4 py-2",
            sm: "h-8 px-3 text-sm",
            lg: "h-12 px-8 text-lg",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };


// import { ButtonHTMLAttributes, forwardRef } from "react";
// import { cn } from "@/lib/utils";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "default" | "outline" | "ghost" | "link";
//   size?: "default" | "sm" | "lg";
// }

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant = "default", size = "default", ...props }, ref) => {
//     return (
//       <button
//         className={cn(
//           "inline-flex items-center justify-center rounded-md font-medium transition-colors",
//           "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
//           "disabled:pointer-events-none disabled:opacity-50",
//           {
//             default: "bg-blue-500 text-white hover:bg-blue-600",
//             outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
//             ghost: "bg-transparent hover:bg-gray-100",
//             link: "text-blue-500 underline-offset-4 hover:underline",
//           }[variant],
//           {
//             default: "h-10 px-4 py-2",
//             sm: "h-8 px-3 text-sm",
//             lg: "h-12 px-8 text-lg",
//           }[size],
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Button.displayName = "Button";

// export { Button, type ButtonProps };