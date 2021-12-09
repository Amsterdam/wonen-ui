type Value = string | number | boolean | null | undefined | Record<string, any>
// export type ValueNodes = Record<string, any>

export type PaginationTypes = {
  page?: number
  pageSize?: number
  collectionSize?: number
  onPageChange?: (page: number) => void
}

export const ASCEND = "ASCEND"
export const DESCEND = "DESCEND"

type SortingOrder = typeof ASCEND | typeof DESCEND

export type Sorting = {
  index: number
  order: SortingOrder
}

export type Sorter<R> = (a: R, b: R) => number

export type Columns<R> = {
  header?: React.ReactNode
  dataIndex?: string
  sorter?: Sorter<R>
  sortOrder?: Sorting["order"]
  defaultSortOrder?: Sorting["order"]
  minWidth?: number
  render?: (text: Value, record: R) => React.ReactNode
}[]

export type TableTypes<R> = {
  numLoadingRows?: number
  loading?: boolean
  hasFixedColumn?: boolean
  columns: Columns<R>
  data?: R[]
  emptyPlaceholder?: React.ReactNode
  showHeadWhenEmpty?: boolean
  onClickRow?: (record: R, index: number, event: React.MouseEvent) => void
  className?: string
  pagination?: false | PaginationTypes
  onChange?: (pagination: any, sorting: any) => void
}
