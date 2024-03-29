import React from "react"
import { Meta } from "@storybook/react"

import { Residents } from "../index"
import residentsData from "./mockedData/residentsData"

export default {
  title: "Residents",
  component: Residents
} as Meta

const StoryComponent = (args) => <Residents {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of the residents of a residence."
  }
}
Default.args = {
  data: residentsData,
  loading: false,
  header: false
}
