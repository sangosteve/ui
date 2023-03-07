import React from "react";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  children: React.ReactNode;
  container?: React.ReactNode;
  item?: boolean;
}

interface ItemProps {
  children: React.ReactNode;
  cols: Cols;
}

const Item = ({ children, cols }: ItemProps) => {
  return <div className={`flex basis-${(cols / 12) * 100}% `}>{children}</div>;
};

const Grid = ({ children, container, item }: GridProps) => {
  return <div className={`flex w-full`}>{children}</div>;
};

Grid.Item = Item;
export default Grid;
