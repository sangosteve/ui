import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const alertStyles = cva(
  "flex items-start p-4 max-w-sm border border-neutral-400 -text-body",
  {
    variants: {
      intent: {
        info: "text-blue-500",
        warning: "",
        success: "",
        error: "",
      },
      variant: {
        light: "",
        filled: "",
        outline: "",
      },
    },
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
        <div className="flex items-start justify-start text-body font-semibold">
          {title}
        </div>
        <div className="mt-2">{children}</div>
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
