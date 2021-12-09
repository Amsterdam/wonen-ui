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
    onChange: {
      description: "Function executed when table sorting or pagination is touched"
    },
    onClickRow: {
      description: "Function executed when row is clicked"
    },
    pagination: {
      description: "`Pagination` defined in ASC. Can be a boolean for inner pagination or use external props for API requests",
      table: {
        defaultValue: { summary: false }
      }
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
for (let i = 1; i < 13; i++) {
  data.push({
    name: `John ${ lastNames[Math.floor(Math.random() * lastNames.length)] }`,
    age: i * 2 + 16,
    address: {
      street: `Weesperstraat ${ i }`,
      zipCode: "1018 VN",
      city: "Amsterdam"
    },
    available: i % 2 === 0
  })
}

export const Default = StoryComponent.bind({})
Default.args = {
  className: "name_of_a_class",
  columns: [
    { header: "Name", dataIndex: "name" },
    { header: "Age", dataIndex: "age" },
    {
      header: "Address",
      dataIndex: "address.street",
      minWidth: 200,
      render: (text: any, record: any) => `${ text }, ${ record?.address.zipCode } ${ record?.address.city }`
    }
  ],
  data,
  emptyPlaceholder: "Nothing found! :(",
  hasFixedColumn: false,
  loading: false,
  numLoadingRows: 10,
  onChange: (pagination: any, sorting: any) => console.log("Pagination:", pagination,"Sorting:", sorting),
  onClickRow: (data: any) => console.log(data),
  showHeadWhenEmpty: true
}

export const Pagination = StoryComponent.bind({})
Pagination.parameters =  {
  docs: {
    storyDescription: "Add `pagination` and a sorter to use inner pagination and/or sorting of the `Table`. Set the sorter in the `columns` object like `(a: any, b: any) => a - b`"
  }
}
Pagination.args = {
  ...Default.args,
  pagination: {},
  columns: [
    {
      header: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name)
    }, {
      header: "Age",
      dataIndex: "age",
      sorter: (a: any, b: any) => a.age - b.age,
      defaultSortOrder: "DESCEND"
    }, {
      header: "Address",
      dataIndex: "address.street",
      sorter: (a: any, b: any) => a.address.street.localeCompare(b.address.street),
      minWidth: 200
    }
  ]
}

export const Sorting = StoryComponent.bind({})
Sorting.parameters =  {
  docs: {
    storyDescription: "Add `pagination` props to have external (API) control. Add `sortOrder` in a column to get external control of selected sorters."
  }
}
Sorting.args = {
  ...Default.args,
  pagination: {
    page: 1,
    pageSize: 5,
    collectionSize: data.length,
    onPageChange: (page: number) => console.log("`onPageChange` from `pagination` prop called", page)
  },
  columns: [
    {
      header: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name)
    }, {
      header: "Age",
      dataIndex: "age",
      sorter: (a: any, b: any) => a.age - b.age,
      sortOrder: "DESCEND"
    }, {
      header: "Address",
      dataIndex: "address.street",
      sorter: (a: any, b: any) => a.address.street.localeCompare(b.address.street),
      minWidth: 200
    }
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
    { header: "Address", dataIndex: "address.street", minWidth: 200 },
    {
      header: "Status",
      dataIndex: "available",
      sorter: (a: any, b: any) => a.available - b.available,
      defaultSortOrder: "DESCEND",
      render: (text: any, record: any) => !record.available && <Tag colorType="secondary">Unavailable</Tag>
    }
  ]
}
