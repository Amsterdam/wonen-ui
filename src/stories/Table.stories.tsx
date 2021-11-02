import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import { Tag } from "@amsterdam/asc-ui"

import { Table } from "../index"
import { sortNumbers, sortStrings } from "../components/Data/Table/utils/sorters"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Table",
  component: Table,
  argTypes: {
    className: {
      description: "Class of the table",
      control: {
        type: null
      }
    },
    columns: {
      description: "Columns of table"
    },
    data: {
      description: "Data record array to be displayed",
      table: {
        type: { summary: "Array of arrays | Array of objects" }
      }
    },
    emptyValue: {
      description: "Empty value of a table cell when data attribute is missing"
    },
    hasFixedColumn: {
      description: "Table has fixed column",
      table: {
        defaultValue: { summary: false }
      }
    },
    loading: {
      description: "Loading status of table",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      }
    },
    noValuesPlaceholder: {
      description: "Placeholder when data has no values"
    },
    numLoadingRows: {
      description: "Number of rows to be skeletonized when the table is loading",
      table: {
        defaultValue: { summary: 5 }
      }
    },
    onClickRow: {
      description: "Function executed when row is clicked"
    },
    showHeadWhenEmpty: {
      description: "Show the header of the table when data is empty",
      table: {
        defaultValue: { summary: true }
      }
    }
  }
} as Meta

const StoryComponent: Story<ComponentProps<typeof Table>> = (args) => <Table {...args} />

const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez",
  "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson"]
const data = []
for (let i = 1; i < 11; i++) {
  data.push([
    `John ${ lastNames[Math.floor(Math.random() * lastNames.length)] }`,
    i * 2 + 16,
    `Weesperstraat ${ i }, 1018 VN Amsterdam`,
    {
      value: i % 2 === 0 ? "Unavailable" : "empty",
      node: i % 2 === 0 ? <Tag colorType="secondary">Unavailable</Tag> : null
    }
  ])
}

export const Default = StoryComponent.bind({})
Default.args = {
  columns: [
    { header: "Name" },
    { header: "Age" },
    { header: "Address", minWidth: 200 }
  ],
  data,
  loading: false,
  numLoadingRows: 10,
  hasFixedColumn: false,
  showHeadWhenEmpty: true,
  emptyValue: "-",
  onClickRow: (data: any) => console.log(data),
  noValuesPlaceholder: "Nothing found! :(",
  className: "name_of_a_class"
}

export const Sorting = StoryComponent.bind({})
Sorting.parameters =  {
  docs: {
    storyDescription: "Add a default `sorter` function to the description of `columns`or create a custom one: `(a: any, b: any) => a - b`"
  }
}
Sorting.args = {
  ...Default.args,
  columns: [
    { header: "Name", sorter: sortStrings, defaultSorting: "ASCEND" },
    { header: "Age", sorter: sortNumbers },
    { header: "Address", sorter: sortStrings, minWidth: 200 }
  ]
}

/**
 * Only use me once per page for the preferred user action.
 */
export const ReactNode = StoryComponent.bind({})
ReactNode.parameters =  {
  docs: {
    storyDescription: "You can add a `ReactNode` to `data` and define the sorting value."
  }
}
ReactNode.args = {
  ...Default.args,
  columns: [
    { header: "Name", sorter: sortStrings },
    { header: "Age", sorter: sortNumbers },
    { header: "Address", minWidth: 200 },
    { header: "Status", sorter: sortStrings, defaultSorting: "DESCEND" }
  ]
}

