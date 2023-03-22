import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
const textStyles = cva("text-success-600 text-title");

export interface TextProps extends VariantProps<typeof textStyles> {
  children?: React.ReactNode;
}
const Text = ({ children }: TextProps) => {
  return <text className={twMerge(textStyles({}))}>{children}</text>;
};

export default Text;
