import React, { useState, Fragment, useMemo } from "react"
import { breakpoint, themeColor } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"
import _get from "lodash.get"

import SmallSkeleton from "../components/SmallSkeleton"
import TableCell from "./components/TableCell/TableCell"
import TableHeader from "./components/TableHeader/TableHeader"
import FixedTableCell, { widthMobile as fixedColumnWidthMobile } from "./components/TableCell/FixedTableCell"
import { Sorting } from "./components/TableHeader/Sorter"
import TablePagination, { PaginationProps, DEFAULT_PAGE_SIZE } from "./components/TablePagination/TablePagination"
import devWarning from "../../../helpers/devWarning"

export type WrappedValue = { value: Value, node: React.ReactNode } // Can be removed
export type ValueNode = Value | WrappedValue | React.ReactNode // Can be removed

export type Value = string | number | boolean | null | undefined | Record<string, any>
export type ValueNodes = Record<string, any>
export type DataIndex = number | string | symbol

type Props<R> = {
  numLoadingRows?: number
  loading?: boolean
  hasFixedColumn?: boolean
  columns: {
    header?: React.ReactNode
    dataIndex?: string
    sorter?: (a: ValueNodes, b: ValueNodes) => number
    defaultSorting?: Sorting["order"]
    minWidth?: number
    render?: (text: Value, record?: ValueNodes) => React.ReactNode
  }[]
  data?: R[]
  emptyPlaceholder?: React.ReactNode
  showHeadWhenEmpty?: boolean
  onClickRow?: (data: R, index: number, event: React.MouseEvent) => void
  className?: string
  pagination?: PaginationProps
  onChange?: (pagination: any, sorting: any) => void
}

const Wrap = styled.div`
  position: relative;
`

type HorizontalScrollContainerProps = {
  fixedColumnWidth?: number
}

const HorizontalScrollContainer = styled.div<HorizontalScrollContainerProps>`
  overflow-x: auto;
  margin-right: ${ fixedColumnWidthMobile }px;
  @media screen and ${ breakpoint("min-width", "laptopM") } {
    margin-right: ${ ({ fixedColumnWidth }) => fixedColumnWidth ? `${ fixedColumnWidth }px` : "auto" };
  }
`

const StyledTable = styled.table`
  border-spacing: 0px;
  width: 100%;
`

type ClickableRowProps = {
  isClickable?: boolean
}

const Row = styled.tr<ClickableRowProps>`
  ${ ({ isClickable }) => isClickable && css`
    cursor: pointer;
    &:hover td {
      background-color: ${ themeColor("tint", "level2") };
    }
  `
  }
  td {
    border-bottom: 1px solid ${ themeColor("tint", "level3") };
  }
`

const NoValuesPlaceholder = styled(TableCell)`
  font-style: italic;
`

const createLoadingData = (numColumns: number, numRows: number) =>
  [...Array(numRows)].map(_ => [...Array(numColumns)].map(_ => ""))

const Table = <R extends ValueNodes>(props: Props<R>) => {
  const {
    columns,
    loading = false,
    numLoadingRows = 5,
    hasFixedColumn,
    showHeadWhenEmpty = true,
    emptyPlaceholder = "",
    onClickRow,
    className,
    data = [],
    pagination,
    onChange
  } = props

  const isEmpty = (data?.length ?? 0) === 0

  const fixedColumnWidth = hasFixedColumn
    ? columns[columns.length - 1].minWidth
    : undefined

  // ============================ Sorter =============================
  const defaultSortingIndex = columns.findIndex(({ defaultSorting }) => defaultSorting !== undefined)
  const defaultSorting = defaultSortingIndex > -1 ? { index: defaultSortingIndex, order: columns[defaultSortingIndex].defaultSorting! } : undefined
  const [sorting, setSorting] = useState<Sorting | undefined>(defaultSorting)

  const sorter = sorting ? columns[sorting.index].sorter : undefined

  const getSortedData = () => ({
    dataIndex: sorting?.index !== undefined ? columns?.[sorting?.index].dataIndex : undefined,
    order: sorting?.order
  })

  const onChangeSorting = (sortingObj: any) => {
    setSorting(sortingObj)
    onChange?.(
      getPaginationData(),
      {
        dataIndex: sortingObj?.index !== undefined ? columns?.[sortingObj?.index].dataIndex : undefined,
        order: sortingObj?.order
      }
    )
  }

  const sortedDataAscend = useMemo(() => {
    if (sorter !== undefined && typeof sorter === "function") {
      return [...data].sort(sorter)
    }
    return data
  }, [data, sorter])

  const sortedData = useMemo(() => {
    if (sortedDataAscend !== undefined && sorting?.order === "DESCEND") {
      return [...sortedDataAscend].reverse()
    }
    return sortedDataAscend
  },[sortedDataAscend, sorting?.order])

  // ========================== Pagination ==========================
  const onPaginationChange = (page: number) => {
    pagination?.onPageChange?.(page)
    onChange?.({ page, collectionSize: mergedPagination.collectionSize  }, getSortedData())
  }

  devWarning(
    !(pagination?.page && typeof pagination.page == "number" && pagination.page > 0),
    "Table",
    "`page` of `pagination` must be greater than 0."
  )

  const mergedPagination = {
    page: pagination?.page ?? 1,
    pageSize: pagination?.pageSize ?? DEFAULT_PAGE_SIZE,
    collectionSize: pagination?.collectionSize ?? 1,
    onPageChange: onPaginationChange
  }

  const getPaginationData = () => ({
    page: mergedPagination.page,
    collectionSize: mergedPagination.collectionSize
  })

  // ============================ Render ============================
  return (
    <Wrap className={ className }>
      <HorizontalScrollContainer fixedColumnWidth={ fixedColumnWidth }>
        <StyledTable>
          {(showHeadWhenEmpty || !isEmpty) && (
            <TableHeader
              columns={ columns }
              hasFixedColumn={ hasFixedColumn }
              onChangeSorting={ onChangeSorting }
              sorting={ sorting }
            />
          )}
          <tbody>
            {!loading && sortedData?.map((rowData, index) => (
              <Row
                key={ index }
                onClick={ (event: React.MouseEvent) => onClickRow?.(rowData, index, event) }
                isClickable={ onClickRow !== undefined }
              >
                {columns.map((column, index) => {
                  const text = column.dataIndex ? _get(rowData, column.dataIndex) : null
                  const node = column.render ? column.render(text, rowData) : text
                  if (hasFixedColumn && index === columns.length - 1) {
                    return (
                      <FixedTableCell key={ index } width={ fixedColumnWidth }>
                        { node }
                      </FixedTableCell>
                    )
                  }
                  return (
                    <TableCell key={ index }>
                      {loading
                        ? <SmallSkeleton maxRandomWidth={ column.minWidth ?? 30 } />
                        : node
                      }
                    </TableCell>
                  )
                })}
              </Row>
            ))}
            {loading && createLoadingData(columns.length, numLoadingRows).map((row, index) => (
              <Row key={ index }>
                {row.map((cell, index) =>
                  <Fragment key={ index }>
                  { hasFixedColumn && index === row.length - 1
                    ? <FixedTableCell width={ fixedColumnWidth }><SmallSkeleton maxRandomWidth={ columns[index].minWidth ?? 30 } /></FixedTableCell>
                    : <TableCell><SmallSkeleton maxRandomWidth={ columns[index].minWidth ?? 30 } /></TableCell>
                  }
                  </Fragment>
                )}
              </Row>
            ))}
            {!loading && isEmpty && (
              <tr>
                <NoValuesPlaceholder colSpan={ columns.length }>
                  { emptyPlaceholder }
                </NoValuesPlaceholder>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </HorizontalScrollContainer>
      {pagination && <TablePagination { ...mergedPagination } />}
    </Wrap>
  )
}

export default Table
