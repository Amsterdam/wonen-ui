import React from "react"
import { Meta } from "@storybook/react"

import { FinancialDisplay } from "../index"

export default {
  title: "FinancialDisplay",
  component: FinancialDisplay
} as Meta

const StoryComponent = (args) => <FinancialDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a figure with the euro symbol."
  }
}
Default.args = {
  amount: 1234
}
