import { Meta, StoryObj } from "@storybook/react"
import { Residents } from "../index"
import residentsData from "./mockedData/residentsData"

const meta: Meta<typeof Residents> = {
  title: "Residents",
  component: Residents
}

export default meta

type Story = StoryObj<typeof Residents>

export const Default: Story = {
  args: {
    data: residentsData,
    loading: false,
    header: false
  }
}
