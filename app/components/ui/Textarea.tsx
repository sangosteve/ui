import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const textareaStyles = cva(`flex flex-col items-start `, {
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

export interface TextAreaProps extends VariantProps<typeof textareaStyles> {
  placeholder?: string;
  label?: string;
  helperText?: string;
  name?: string;
  value?: string;
  intent?: "info" | "warning" | "success" | "error";
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  onChange?: (val: any) => void;
}

export const Textarea = ({
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
}: TextAreaProps) => {
  return (
    <div className={textareaStyles({ intent, className })} {...props}>
      {label && (
        <label className="text-body">
          {label}{" "}
          {required && <span className=" text-title2 text-red-500">*</span>}
        </label>
      )}
      <textarea
        className={`mt-1 px-4 py-1 border border-gray-500 hover:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md text-body text-neutral-800 w-72`}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
      {helperText && <small className="text-neutral-200">{helperText}</small>}
    </div>
  );
};
