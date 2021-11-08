import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { DefinitionList } from "../index"
import definitionListData from "./mockedData/definitionListData"

export default {
  title: "DefinitionList",
  component: DefinitionList,
  argTypes: {
    data: {},
    hasRowsSeperated: {
      description: "Seperates the rows with borders"
    },
    headingSize: {},
    loading: {},
    emptyPlaceholder: {},
    numLoadingRows: {},
    title: {}
  }
} as Meta

const StoryComponent: Story<ComponentProps<typeof DefinitionList>> = (args) => <DefinitionList {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "A list with a title seperated by horizontal borders."
  }
}
Default.args = {
  data: definitionListData,
  hasRowsSeperated: true,
  headingSize: "h2",
  loading: false,
  emptyPlaceholder: "empty",
  numLoadingRows: 5,
  title: "Objectdetails"
}
