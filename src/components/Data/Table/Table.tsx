import React, { useState, Fragment } from "react"
import { breakpoint, themeColor } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"

import SmallSkeleton from "../components/SmallSkeleton"
import TableCell from "./components/TableCell/TableCell"
import TableHeader from "./components/TableHeader/TableHeader"
import FixedTableCell, { widthMobile as fixedColumnWidthMobile } from "./components/TableCell/FixedTableCell"
import { Sorting } from "./components/TableHeader/Sorter"
// import createSorter from "./utils/createSorter"
// import { getNode } from "./utils/getValue"
// import indexValueNode from "./utils/indexValueNode"

export type Value = string | number | boolean | null | undefined
export type WrappedValue = { value: Value, node: React.ReactNode }
export type ValueNode = Value | WrappedValue | React.ReactNode
export type ValueNodes = ValueNode[] | Record<string, ValueNode>
export type DataIndex = number | string | symbol

type Props<R> = {
  numLoadingRows?: number
  loading?: boolean
  hasFixedColumn?: boolean
  columns: {
    header?: React.ReactNode
    dataIndex: string
    sorter?: (a: ValueNodes, b: ValueNodes) => number
    defaultSorting?: Sorting["order"]
    minWidth?: number
    render?: (text: string, record?: any) => void
  }[]
  data?: R[]
  emptyPlaceholder?: React.ReactNode
  showHeadWhenEmpty?: boolean
  onClickRow?: (data: R, index: number, event: React.MouseEvent) => void
  className?: string
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
    data
  } = props

  const isEmpty = (data?.length ?? 0) === 0

  const fixedColumnWidth = hasFixedColumn
    ? columns[columns.length - 1].minWidth
    : undefined

  const defaultSortingIndex = columns.findIndex(({ defaultSorting }) => defaultSorting !== undefined)
  const defaultSorting = defaultSortingIndex > -1 ? { index: defaultSortingIndex, order: columns[defaultSortingIndex].defaultSorting! } : undefined
  const [sorting, setSorting] = useState<Sorting | undefined>(defaultSorting)

  const sorter = sorting ? columns[sorting.index].sorter : undefined
  const sortedDataAscend = sorter !== undefined && typeof sorter === "function" ? data?.sort(sorter) : data
  const sortedData = sortedDataAscend !== undefined && sorting?.order === "DESCEND" ? [...sortedDataAscend].reverse() : sortedDataAscend

  return (
    <Wrap className={ className }>
      <HorizontalScrollContainer fixedColumnWidth={ fixedColumnWidth }>
        <StyledTable>
          {(showHeadWhenEmpty || !isEmpty) && (
            <TableHeader
              columns={ columns }
              hasFixedColumn={ hasFixedColumn }
              onChangeSorting={ setSorting }
              sorting={ sorting }
            />
          )}
          <tbody>
            {!loading && sortedData?.map((rowData, index) => (
              <Row key={ index } onClick={ (event: React.MouseEvent) => onClickRow?.(rowData, index, event) } isClickable={ onClickRow !== undefined } >
                {columns.map((column, index) => {
                    const node = column.render ? column.render(rowData[column.dataIndex], rowData) : rowData[column.dataIndex]
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
    </Wrap>
  )
}

export default Table
