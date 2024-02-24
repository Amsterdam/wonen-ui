import React from "react"
import { Meta } from "@storybook/react"

import { HolidayRental } from "../index"
import holidayRentalData from "./mockedData/holidayRentalData"

export default {
  title: "HolidayRental",
  component: HolidayRental
} as Meta

const StoryComponent = (args) => <HolidayRental {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of permits"
  }
}
Default.args = {
  data: holidayRentalData,
  horizontalBordered: true,
  loading: false,
  showRecentYearOnly: false
}
