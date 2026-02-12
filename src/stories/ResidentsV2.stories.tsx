import { Meta, StoryObj } from "@storybook/react"
import { ResidentsV2 } from "../index"
import residentsData from "./mockedData/residentsDataV2"

const meta: Meta<typeof ResidentsV2> = {
  title: "ResidentsV2",
  component: ResidentsV2
}

export default meta

type Story = StoryObj<typeof ResidentsV2>

export const Default: Story = {
  args: {
    data: residentsData,
    loading: false,
    header: false
  }
}
