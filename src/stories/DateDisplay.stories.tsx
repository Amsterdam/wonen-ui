import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { DateDisplay } from "../index"

export default {
  title: "DateDisplay",
  component: DateDisplay
} as Meta

const StoryComponent: Story<ComponentProps<typeof DateDisplay>> = (args) => <DateDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a date."
  }
}
Default.args = {
  date: "2021-03-31T10:51:48+0200"
}
