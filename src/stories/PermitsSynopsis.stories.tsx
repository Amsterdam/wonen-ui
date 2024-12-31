import { Meta, StoryObj } from "@storybook/react"
import { PermitsSynopsis } from "../index"
import PermitsSynopsisData from "./mockedData/PermitsSynopsisData"

const meta: Meta<typeof PermitsSynopsis> = {
  title: "PermitsSynopsis",
  component: PermitsSynopsis
}

export default meta

type Story = StoryObj<typeof PermitsSynopsis>

export const Default: Story = {
  args: {
    horizontalBordered: true,
    loading: false,
    permits: PermitsSynopsisData,
    displayOnlyValidPermits: false
  }
}
