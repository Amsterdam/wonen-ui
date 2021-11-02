import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { TextWithLinebreaks } from "../index"

export default {
  title: "TextWithLinebreaks",
  component: TextWithLinebreaks
} as Meta

const StoryComponent: Story<ComponentProps<typeof TextWithLinebreaks>> = (args, children) => (
  <TextWithLinebreaks {...args} >{ `line 1
    line 2

    line 4`

    }
  </TextWithLinebreaks>
)

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays text with linebreaks."
  }
}

