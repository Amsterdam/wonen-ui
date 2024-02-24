import React from "react"
import { Meta } from "@storybook/react"

import { TextWithURLs } from "../index"

export default {
  title: "TextWithURLs",
  component: TextWithURLs
} as Meta

const StoryComponent = (args) => <TextWithURLs {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Text with URL's."
  }
}
Default.args = {
  text: "http://example.com/ https://www.example.com"
}
