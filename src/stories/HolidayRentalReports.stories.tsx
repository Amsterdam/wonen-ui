import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { HolidayRentalReports } from "../index"
import holidayRentalReportsData from "./mockedData/holidayRentalReportsData"

export default {
  title: "HolidayRentalReports",
  component: HolidayRentalReports
} as Meta

const StoryComponent: Story<ComponentProps<typeof HolidayRentalReports>> = (args) => <HolidayRentalReports {...args} />

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
