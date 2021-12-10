import { useState } from "react"
import { ColumnType, Sorting, Sorter } from "../types"

const useSorter = (
  columns: ColumnType[],
  onSortingTrigger: (sorting: Sorting) => void
): [
  Sorting | undefined,
  Sorter | undefined,
  (sortingObj: Sorting) => void,
  () => {}
] => {

  const defaultSortingIndex = columns.findIndex(({ defaultSortOrder }) => defaultSortOrder !== undefined)
  const defaultSorting = defaultSortingIndex > -1 ? { index: defaultSortingIndex, order: columns[defaultSortingIndex].defaultSortOrder! } : undefined

  const [sorting, setSorting] = useState<Sorting | undefined>(defaultSorting)

  const sortOrderIndex = columns.findIndex(({ sortOrder }) => sortOrder !== undefined)
  const sortOrderObj = sortOrderIndex > -1 ? { index: sortOrderIndex, order: columns[sortOrderIndex].sortOrder! } : undefined

  const mergedSorting = sortOrderObj ?? sorting

  const sorter = mergedSorting ? columns[mergedSorting.index].sorter : undefined

  const onChangeSorting = (sortingObj: Sorting) => {
    setSorting(sortingObj)
    onSortingTrigger(sortingObj)
  }

  const getSortingObj = () => ({
    dataIndex: mergedSorting?.index !== undefined ? columns?.[mergedSorting?.index].dataIndex : undefined,
    order: mergedSorting?.order
  })

  return [
    mergedSorting,
    sorter,
    onChangeSorting,
    getSortingObj
  ]
}

export default useSorter
