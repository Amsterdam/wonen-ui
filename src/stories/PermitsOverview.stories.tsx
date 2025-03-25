import { Meta, StoryObj } from "@storybook/react"
import { PermitsOverview } from "../index"
import permitsOverviewData from "./mockedData/permitsOverviewData"

const meta: Meta<typeof PermitsOverview> = {
  title: "PermitsOverview",
  component: PermitsOverview
}

export default meta

type Story = StoryObj<typeof PermitsOverview>

export const Default: Story = {
  args: {
    horizontalBordered: true,
    loading: false,
    permits: permitsOverviewData,
    showUnknown: false
  }
}
