import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/app/components/ui";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  args: {
    intent: "info",
    variant: "light",
    children: "DEFAULT",
  },
};

export const Outline: Story = {
  args: {
    intent: "info",
    variant: "outline",
    children: "OUTLINE",
  },
};
export const Filled: Story = {
  args: {
    intent: "info",
    variant: "filled",
    children: "FILLED",
  },
};
