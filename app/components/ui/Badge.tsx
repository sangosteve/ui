import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
const badgeStyles = cva(
  "flex items-center justify-center -text-body font-semibold px-3 py-0.5 bg-red-500 rounded-xl",
  {
    variants: {
      intent: {
        info: "text-blue-500",
        warning: "text-orange-500",
        success: "text-green-500",
        error: "text-red-500",
      },
      variant: {
        light: "",
        filled: "",
        outline: "bg-transparent",
      },
    },
    compoundVariants: [
      //Light
      {
        intent: "info",
        variant: "light",
        className: "bg-blue-50 border-0 text-neutral-900",
      },
      {
        intent: "info",
        variant: "outline",
        className: "border border-blue-500",
      },
      {
        intent: "info",
        variant: "filled",
        className: "bg-blue-500 border-0 text-white",
      },
      {
        intent: "warning",
        variant: "light",
        className: "bg-orange-50 border-0 text-neutral-900",
      },
      {
        intent: "warning",
        variant: "outline",
        className: "border border-orange-500",
      },
      {
        intent: "warning",
        variant: "filled",
        className: "bg-orange-500 border-0 text-white",
      },
      {
        intent: "success",
        variant: "light",
        className: "bg-green-50 border-0 text-neutral-900",
      },
      {
        intent: "success",
        variant: "filled",
        className: "bg-green-500 border-0 text-white",
      },
      {
        intent: "success",
        variant: "outline",
        className: "border border border-green-500",
      },
    
      {
        intent: "error",
        variant: "light",
        className: "bg-red-50 border-0 text-neutral-900",
      },
      //Filled

      {
        intent: "error",
        variant: "filled",
        className: "bg-red-500 border-0 text-white",
      },
      //Outline
      {
        intent: "error",
        variant: "outline",
        className: "border border-red-500",
      },
    
    
     
    ],
  }
);

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
  intent?: "info" | "warning" | "success" | "error";
  variant?: "light" | "filled" | "outline";
  children?: React.ReactNode;
}

const Badge = ({ intent, variant, children }: BadgeProps) => {
  return (
    <div className={twMerge(badgeStyles({ intent, variant }))}>
      {children}
    </div>
  );
};

export default Badge;
