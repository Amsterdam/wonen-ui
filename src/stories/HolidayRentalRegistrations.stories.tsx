import { Meta, StoryObj } from "@storybook/react"
import { HolidayRentalRegistrations } from "../index"
import holidayRentalRegistrationsData from "./mockedData/holidayRentalRegistrationsData"

const meta: Meta<typeof HolidayRentalRegistrations> = {
  title: "HolidayRentalRegistrations",
  component: HolidayRentalRegistrations
}

export default meta

type Story = StoryObj<typeof HolidayRentalRegistrations>;

export const Default: Story = {
  args: {
    data: holidayRentalRegistrationsData,
    horizontalBordered: true,
    loading: false
  }
}
