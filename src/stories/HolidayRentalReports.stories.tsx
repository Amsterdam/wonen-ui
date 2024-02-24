import React from "react"
import { Meta } from "@storybook/react"

import { HolidayRentalReports } from "../index"
import holidayRentalReportsData from "./mockedData/holidayRentalReportsData"

export default {
  title: "HolidayRentalReports",
  component: HolidayRentalReports
} as Meta

const StoryComponent = (args) => <HolidayRentalReports {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of holiday reports"
  }
}
Default.args = {
  data: holidayRentalReportsData,
  horizontalBordered: true,
  loading: false
}
