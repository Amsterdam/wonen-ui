import React from "react"
import { Meta } from "@storybook/react"

import { DefinitionList } from "../index"
import definitionListData from "./mockedData/definitionListData"

export default {
  title: "DefinitionList",
  component: DefinitionList,
  argTypes: {
    data: {},
    horizontalBordered: {
      description: "Seperates the rows with borders"
    },
    headingSize: {},
    loading: {},
    emptyPlaceholder: {},
    numLoadingRows: {},
    title: {}
  }
} as Meta

const StoryComponent = (args) => <DefinitionList {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "A list with a title seperated by horizontal borders."
  }
}
Default.args = {
  data: definitionListData,
  horizontalBordered: true,
  headingSize: "h2",
  loading: false,
  emptyPlaceholder: "empty",
  numLoadingRows: 5,
  title: "Objectdetails"
}
