import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { PermitsOverview } from "../index"
import permitsOverviewData from "./mockedData/permitsOverviewData"

export default {
  title: "PermitsOverview",
  component: PermitsOverview
} as Meta

const StoryComponent: Story<ComponentProps<typeof PermitsOverview>> = (args) => <PermitsOverview {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Overview of permits"
  }
}
Default.args = {
  hasRowsSeperated: true,
  loading: false,
  permits: permitsOverviewData,
  showUnknown: false
}
