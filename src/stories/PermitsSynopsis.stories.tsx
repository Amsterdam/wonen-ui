import React from "react"
import { Meta } from "@storybook/react"

import { PermitsSynopsis } from "../index"
import PermitsSynopsisData from "./mockedData/PermitsSynopsisData"

export default {
  title: "PermitsSynopsis",
  component: PermitsSynopsis
} as Meta

const StoryComponent = (args) => <PermitsSynopsis { ...args } />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of permits"
  }
}
Default.args = {
  horizontalBordered: true,
  loading: false,
  permits: PermitsSynopsisData,
  displayOnlyValidPermits: false
}
