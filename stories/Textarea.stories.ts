import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@/app/components/ui/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;
export const Default: Story = {
  args: {
    intent: "info",
    label: "Name",
    required: true,
    helperText: "your information will be kept safe",
  },
};
