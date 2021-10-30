import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { DayDisplay } from "../index"

export default {
  title: "DayDisplay",
  component: DayDisplay
} as Meta

const StoryComponent: Story<ComponentProps<typeof DayDisplay>> = (args) => <DayDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a day."
  }
}
Default.args = {
  date: "2021-03-31T10:51:48+0200"
}
