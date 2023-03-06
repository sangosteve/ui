import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
}

interface ItemProps {
  children: React.ReactNode;
  cols?: Cols;
}

const Item = ({ children, cols }: ItemProps) => {
  // return <div className={`flex basis-1/12`}>{children}</div>;
  return <div className={`flex basis-${cols}/12`}>{children}</div>;
};

const Grid = ({ children }: GridProps) => {
  return (
    <div className={`w-screen h-screen flex flex-wrap gap-1`}>{children}</div>
  );
};

Grid.Item = Item;
export default Grid;
