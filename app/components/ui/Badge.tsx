import React from "react";
import { cva, VariantProps } from "class-variance-authority";

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
        outline: "",
      },
    },
    compoundVariants: [
      //Light
      {
        intent: "info",
        variant: "light",
        class: "bg-blue-50 border-0 text-neutral-900",
      },
      {
        intent: "warning",
        variant: "light",
        class: "bg-orange-50 border-0 text-neutral-900",
      },
      {
        intent: "success",
        variant: "light",
        class: "bg-green-50 border-0 text-neutral-900",
      },
      {
        intent: "error",
        variant: "light",
        class: "bg-red-50 border-0 text-neutral-900",
      },
      //Filled

      {
        intent: "error",
        variant: "filled",
        class: "bg-red-500 border-0 text-white",
      },
      {
        intent: "success",
        variant: "filled",
        class: "bg-green-500 border-0 text-white",
      },
      {
        intent: "warning",
        variant: "filled",
        class: "bg-orange-500 border-0 text-white",
      },
      {
        intent: "info",
        variant: "filled",
        class: "bg-blue-500 border-0 text-white",
      },
      //Outline
      {
        intent: "error",
        variant: "outline",
        class: "bg-transparent border border-red-500",
      },
      {
        intent: "success",
        variant: "outline",
        class: "bg-transparent border border border-green-500",
      },
      {
        intent: "warning",
        variant: "outline",
        class: "bg-transparent border border-orange-500",
      },
      {
        intent: "info",
        variant: "outline",
        class: "bg-transparent border border-blue-500",
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
    <div className={badgeStyles({ intent, variant })}>
      <span>{children}</span>
    </div>
  );
};

export default Badge;
