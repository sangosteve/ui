import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/app/components/ui/Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: {
    intent: "info",
    label: "Name",
    required: true,
    helperText: "your information will be kept safe",
  },
};

//23001381
//23001382
