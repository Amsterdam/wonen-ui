import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { PersonRoleDisplay } from "../index"

export default {
  title: "PersonRoleDisplay",
  component: PersonRoleDisplay
} as Meta

const StoryComponent: Story<ComponentProps<typeof PersonRoleDisplay>> = (args) => <PersonRoleDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a role."
  }
}
Default.args = {
  personRole: "PERSON_ROLE_RESIDENT"
}
