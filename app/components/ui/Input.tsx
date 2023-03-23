import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(`flex flex-col items-start `, {
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
});

export interface InputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  label?: string;
  helperText?: string;
  name?: string;
  type?: string;
  value?: string | number;
  intent?: "info" | "warning" | "success" | "error";
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  onChange?: (val: any) => void;
}

export const Input = ({
  intent,
  required,
  fullWidth,
  value,
  placeholder,
  label,
  helperText,
  className,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className={inputStyles({ intent, className })} {...props}>
      {label && (
        <label className="text-gray-700 text-sm font-medium">
          {label}{" "}
          {required && <span className=" text-sm text-error-600">*</span>}
        </label>
      )}
      <input
        className={`mt-1 px-4 py-1 border border-gray-300 hover:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md text-sm text-gray-900 font-regular  w-72`}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        {...props}
      />
      {helperText && <small className="text-gray-500 mt-1">{helperText}</small>}
    </div>
  );
};
