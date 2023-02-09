import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva("rounded-md relative", {
  variants: {
    variant: {
      default: "bg-white text-text shadow-button border border-gray-400",
      primary: "bg-blue-500 text-white",
      destructive: "bg-destructive text-white",
      monochrome: "bg-white text-text border border-gray-400",
    },
    modifier: {
      outline:
        "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
      plain: "shadow-none bg-transparent border-none px-2 py-1 text-sm",
    },
    size: {
      slim: "text-sm",
      medium: "text-sm",
      large: "text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-surfaceDisabled text-textDisabled",
    },
  },
  compoundVariants: [
    {
      modifier: "outline",
      variant: "destructive",
      className: "text-destructive",
    },
    {
      modifier: "outline",
      variant: "primary",
      className: "text-blue-500",
    },
    {
      modifier: "plain",
      variant: "destructive",
      className: "text-destructive",
    },
    {
      modifier: "plain",
      variant: "primary",
      className: "text-primary",
    },
    {
      modifier: undefined,
      size: "slim",
      className: "px-3 py-[3px]",
    },
    {
      modifier: "outline",
      size: "slim",
      className: "px-3 py-[3px]",
    },
    {
      modifier: undefined,
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: "outline",
      size: "medium",
      className: "px-4 py-2",
    },
    {
      modifier: undefined,
      size: "large",
      className: "px-6 py-3",
    },
    {
      modifier: "outline",
      size: "large",
      className: "px-6 py-3",
    },
    {
      disabled: true,
      variant: "default",
      className: "border-borderDisabled",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={button({ variant, modifier, size, fullWidth, disabled })}
    >
      {children}
    </button>
  );
};
