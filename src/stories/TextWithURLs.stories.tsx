import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { TextWithURLs } from "../index"

export default {
  title: "TextWithURLs",
  component: TextWithURLs
} as Meta

const StoryComponent: Story<ComponentProps<typeof TextWithURLs>> = (args) => <TextWithURLs {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Text with URL's."
  }
}
Default.args = {
  text: "http://example.com/ https://www.example.com"
}
