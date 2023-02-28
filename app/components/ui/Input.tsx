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
  required?: boolean;
  fullWidth?: boolean;
}

export const Input = ({
  intent,
  required,
  fullWidth,
  value,
  placeholder,
  label,
  helperText,
  ...props
}: InputProps) => {
  return (
    <div className={inputStyles({ intent })} {...props}>
      {label && (
        <label className="text-body">
          {label}{" "}
          {required && <span className=" text-title2 text-red-500">*</span>}
        </label>
      )}
      <input
        className={`mt-1 px-4 py-1 border border-gray-500 hover:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md text-body text-neutral-800 w-72`}
        placeholder={placeholder}
        value={value}
        required={required}
      />
      {helperText && <small className="text-neutral-200">{helperText}</small>}
    </div>
  );
};
