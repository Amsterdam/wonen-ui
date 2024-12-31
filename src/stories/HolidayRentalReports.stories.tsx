import { Meta, StoryObj } from "@storybook/react"
import { HolidayRentalReports } from "../index"
import holidayRentalReportsData from "./mockedData/holidayRentalReportsData"

const meta: Meta<typeof HolidayRentalReports> = {
  title: "HolidayRentalReports",
  component: HolidayRentalReports
}

export default meta

type Story = StoryObj<typeof HolidayRentalReports>

export const Default: Story = {
  args: {
    data: holidayRentalReportsData,
    horizontalBordered: true,
    loading: false
  }
}
