// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { LoadingRows } from "../index"

const meta: Meta<typeof LoadingRows> = {
  title: "LoadingRows",
  component: LoadingRows,
  argTypes: {
    numRows: {
      description: "Number of rows for the loading skeleton.",
      table: {
        type: { summary: "number" }
      },
      control: { type: "number" }
    }
  }
}
export default meta

type Story = StoryObj<typeof LoadingRows>;

export const Default: Story = {
  parameters:  {
    docs: {
      storyDescription: "A skeleton for definition list. Two columns each row (numRows) with a random width (max 100)."
    }
  },
  args: {
    loading: true,
    numRows: 1
  }
}
