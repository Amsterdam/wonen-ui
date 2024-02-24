import React from "react"
import { Meta } from "@storybook/react"

import { PermitsOverview } from "../index"
import permitsOverviewData from "./mockedData/permitsOverviewData"

export default {
  title: "PermitsOverview",
  component: PermitsOverview
} as Meta

const StoryComponent = (args) => <PermitsOverview { ...args } />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of permits"
  }
}
Default.args = {
  horizontalBordered: true,
  loading: false,
  permits: permitsOverviewData,
  showUnknown: false
}
