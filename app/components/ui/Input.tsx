import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  `flex flex-col items-start `,

  {
    variants: {
      intent: {
        info: "",
        warning: "",
        success: "",
        error: "",
      },
    },
    defaultVariants: {
      intent: "info",
    },
  }
);

export interface InputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  label?: string;
  helperText?: string;

  name?: string;
  value?: string;
  // onChange?: (event: React.InputEvent<HTMLInputElement>) => void,
  // onBlur?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  // onFocus?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  intent?: "info" | "warning" | "success" | "error";
  fullWidth?: boolean;
}

export const Input = ({
  intent,
  fullWidth,
  value,
  placeholder,
  label,
  helperText,
  ...props
}: InputProps) => {
  return (
    <div className={inputStyles({ intent })} {...props}>
      {label && <label className="text-body">{label}</label>}
      <input
        className={`mt-1 px-4 py-1 border border-neutral-200 rounded-sm text-body text-neutral-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-${
          intent === "info" ? "blue" : "green"
        }-500`}
        placeholder={placeholder}
        value={value}
      />
      {helperText && <small className="text-neutral-200">{helperText}</small>}
    </div>
  );
};