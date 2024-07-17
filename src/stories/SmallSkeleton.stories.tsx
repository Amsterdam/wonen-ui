import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { SmallSkeleton } from "../index"

const meta: Meta<typeof SmallSkeleton> = {
  title: "SmallSkeleton",
  component: SmallSkeleton,
  argTypes: {
    height: {
      description: "Height of the skeleton",
      table: {
        type: { summary: "number" }
      },
      control: { type: "number" }
    }
  }
}
export default meta

type Story = StoryObj<typeof SmallSkeleton>;

export const Default: Story = {
  parameters:  {
    docs: {
      storyDescription: "A small skeleton for loading data."
    }
  },
  args: {
    loading: true,
    height: 5,
    maxRandomWidth: 100
  }
}
