import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { CaseIdDisplay } from "../index"

export default {
  title: "CaseIdDisplay",
  component: CaseIdDisplay,
  argTypes: {
    id: {
      description: "Id of a case",
      table: {
        type: { summary: "string | number" }
      },
      control: { type: "number" }
    }
  }
} as Meta

const StoryComponent: Story<ComponentProps<typeof CaseIdDisplay>> = (args) => <CaseIdDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a case id with a minimum of 6 figures."
  }
}
Default.args = {
  id: 1234
}
