import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center font-semibold px-4 py-2 rounded-md ",
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 text-body",
        warning: "bg-orange-500 text-white hover:bg-orange-600 text-body",
        success: "bg-green-500 text-white hover:bg-green-600 text-body",
        error: "bg-red-500 text-white hover:bg-red-500 text-body",
      },
      variant: {
        outline: 'bg-transparent',
        link: "bg-transparent border-none",
        ghost: "border-none",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "outline",
        className:
          "text-blue-500 bg-transparent border border-blue-500 hover:bg-transparent hover:border-blue-700 hover:text-blue-700",
      },
      {
        intent: "warning",
        variant: "outline",
        className:
          "bg-transparent border border-orange-500 text-orange-500  hover:bg-transparent hover:border-orange-700 hover:text-orange-700",
      },
      {
        intent: "success",
        variant: "outline",
        className:
          "bg-transparent border border-green-500 text-green-500  hover:bg-transparent hover:border-green-700 hover:text-green-700",
      },
      {
        intent: "error",
        variant: "outline",
        className:
          "bg-transparent border border-red-500 text-red-500  hover:bg-transparent hover:border-red-700 hover:text-red-700",
      },
      //   GHOST
      {
        intent: "primary",
        variant: "ghost",
        className: "bg-blue-100 text-blue-500 hover:text-blue-700",
      },
    ],
  }
);

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  intent?: "primary" | "warning" | "success" | "error";
  variant?: "outline" | "link" | "ghost";
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  intent,
  variant,
  fullWidth,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, variant, fullWidth })} {...props}>
      {children}
    </button>
  );
};

export default Button;
