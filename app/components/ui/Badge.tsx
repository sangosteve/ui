import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
const badgeStyles = cva(
  "inline-flex text-caption text-center font-bold px-4 py-0.5 rounded-full",
  {
    variants: {
      intent: {
        info: "text-indigo-500",
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
        className: "bg-indigo-100 border-0 text-indigo-500",
      },
      {
        intent: "info",
        variant: "outline",
        className: "border border-indigo-500",
      },
      {
        intent: "info",
        variant: "filled",
        className: "bg-indigo-500 border-0 text-white",
      },
      {
        intent: "warning",
        variant: "light",
        className: "bg-orange-100 border-0 text-orange-500",
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
        className: "bg-green-100 border-0 text-green-500",
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
        className: "bg-red-100 border-0 text-red-500",
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
    <span className={twMerge(badgeStyles({ intent, variant }))}>
      {children}
    </span>
  );
};

export default Badge;
