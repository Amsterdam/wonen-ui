import React from "react"
import { Meta } from "@storybook/react"

import { List } from "../index"

export default {
  title: "List",
  component: List,
  argTypes: {
    data: {
      description: "Data array to be displayed",
      table: {
        type: { summary: "Array of strings" }
      }
    },
    emptyPlaceholder: {},
    headingSize: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" }
      }
    },
    loading: {
      description: "Loading status of list",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      }
    },
    numLoadingRows: {
      description: "Number of rows to be skeletonized when the list is loading",
      table: {
        defaultValue: { summary: 0 }
      }
    },
    title: {}
  }
} as Meta

const StoryComponent = (args) => <List {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Displays a list of items."
  }
}
Default.args = {
  title: "Lijst",
  data: ["Alfa", "Beta", "Gamma"],
  headingSize: "h2",
  loading: false,
  numLoadingRows: 6,
  emptyPlaceholder: "empty"
}
