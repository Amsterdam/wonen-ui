type Value = string | number | boolean | null | undefined | Record<string, any>

export type PaginationType = {
  page?: number
  pageSize?: number
  collectionSize?: number
  onPageChange?: (page: number) => void
}

export const ASCEND = "ASCEND"
export const DESCEND = "DESCEND"

type SortOrder = typeof ASCEND | typeof DESCEND

export type Sorting = {
  index: number
  order: SortOrder
}

export type Sorter = (a: Value, b: Value) => number

export type ColumnType = {
  header?: React.ReactNode
  dataIndex?: string
  sorter?: Sorter
  sortOrder?: SortOrder
  defaultSortOrder?: SortOrder
  minWidth?: number
  render?: (text: Value, record: Value) => React.ReactNode
}

export type TableType<R> = {
  numLoadingRows?: number
  loading?: boolean
  hasFixedColumn?: boolean
  columns: ColumnType[]
  data?: R[]
  emptyPlaceholder?: React.ReactNode
  showHeadWhenEmpty?: boolean
  onClickRow?: (record: R, index: number, event: React.MouseEvent) => void
  className?: string
  pagination?: false | PaginationType
  onChange?: (pagination: any, sorting: any) => void
}
