import React from "react"
import { Meta } from "@storybook/react"

import { DayDisplay } from "../index"

export default {
  title: "DayDisplay",
  component: DayDisplay
} as Meta

const StoryComponent = (args) => <DayDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a day."
  }
}
Default.args = {
  date: "2021-03-31T10:51:48+0200"
}
