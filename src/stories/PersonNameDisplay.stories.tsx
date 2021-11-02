import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { PersonNameDisplay } from "../index"

export default {
  title: "PersonNameDisplay",
  component: PersonNameDisplay
} as Meta

const StoryComponent: Story<ComponentProps<typeof PersonNameDisplay>> = (args) => <PersonNameDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a persons name."
  }
}
Default.args = {
  sex: "V",
  firstName: "A.C.",
  namePrefix: "van",
  name: "Gouderinge"
}
