import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const alertStyles = cva(
  "flex items-start p-4 max-w-sm border border-neutral-400 rounded-md text-body",
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
        class: "bg-transparent border-red-500",
      },
      {
        intent: "success",
        variant: "outline",
        class: "bg-transparent border-green-500",
      },
      {
        intent: "warning",
        variant: "outline",
        class: "bg-transparent border-orange-500",
      },
      {
        intent: "info",
        variant: "outline",
        class: "bg-transparent border-blue-500",
      },
    ],
  }
);

export const Alert = ({
  children,
  icon,
  title,
  intent,
  variant,
}: AlertProps) => {
  return (
    <div className={alertStyles({ intent, variant })}>
      <div className="flex items-start">{icon}</div>
      <div className="flex flex-col items-start justify-start ml-2">
        <div
          className={`flex items-start justify-start text-body font-semibold`}
        >
          {title}
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
};

export interface AlertProps extends VariantProps<typeof alertStyles> {
  intent?: "info" | "warning" | "success" | "error";
  variant?: "light" | "filled" | "outline";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
}

export default Alert;
