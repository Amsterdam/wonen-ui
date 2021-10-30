import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { FinancialDisplay } from "../index"

export default {
  title: "FinancialDisplay",
  component: FinancialDisplay
} as Meta

const StoryComponent: Story<ComponentProps<typeof FinancialDisplay>> = (args) => <FinancialDisplay {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a figure with the euro symbol."
  }
}
Default.args = {
  amount: 1234
}
