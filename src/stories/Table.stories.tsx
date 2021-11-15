import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import { Tag } from "@amsterdam/asc-ui"

import { Table } from "../index"

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
    emptyPlaceholder: {
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
  data.push({
    name: `John ${ lastNames[Math.floor(Math.random() * lastNames.length)] }`,
    age: i * 2 + 16,
    street: `Weesperstraat ${ i }`,
    zipCode: "1018 VN",
    city: "Amsterdam",
    available: i % 2 === 0
  })
}

export const Default = StoryComponent.bind({})
Default.args = {
  columns: [
    { header: "Name", dataIndex: "name" },
    { header: "Age", dataIndex: "age" },
    {
      header: "Address",
      dataIndex: "street",
      minWidth: 200,
      render: (text: any, record: any) => `${ text }, ${ record?.zipCode } ${ record?.city }`
    }
  ],
  data,
  loading: false,
  numLoadingRows: 10,
  hasFixedColumn: false,
  showHeadWhenEmpty: true,
  onClickRow: (data: any) => console.log(data),
  emptyPlaceholder: "Nothing found! :(",
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
    { header: "Name", dataIndex: "name", sorter: (a: any, b: any) => a.name.localeCompare(b.name), defaultSorting: "ASCEND" },
    { header: "Age", dataIndex: "age", sorter: (a: any, b: any) => a.age - b.age },
    { header: "Address", dataIndex: "street", sorter: (a: any, b: any) => a.street.localeCompare(b.street), minWidth: 200 }
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
    { header: "Name", dataIndex: "name", sorter: (a: any, b: any) => a.name.localeCompare(b.name) },
    { header: "Age", dataIndex: "age", sorter: (a: any, b: any) => a.age - b.age },
    { header: "Address", dataIndex: "street", minWidth: 200 },
    {
      header: "Status",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.available - b.available,
      defaultSorting: "DESCEND",
      render: (text: any, record: any) => !record.available && <Tag colorType="secondary">Unavailable</Tag>
    }
  ]
}

