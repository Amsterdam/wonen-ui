import { useState, Fragment } from "react"
import { breakpoint, themeColor } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"

import SmallSkeleton from "../components/SmallSkeleton"
import TableCell from "./components/TableCell/TableCell"
import TableHeader from "./components/TableHeader/TableHeader"
import FixedTableCell, { widthMobile as fixedColumnWidthMobile } from "./components/TableCell/FixedTableCell"
import { Sorting } from "./components/TableHeader/Sorter"
import createSorter from "./utils/createSorter"
import { getNode } from "./utils/getValue"
import indexValueNode from "./utils/indexValueNode"

export type Value = string | number | null | undefined
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
    dataIndex?: number | keyof R
    sorter?: (a: Value, b: Value) => number
    defaultSorting?: Sorting["order"]
    emptyValue?: React.ReactNode
    minWidth?: number
  }[]
  data?: R[]
  noValuesPlaceholder?: React.ReactNode
  showHeadWhenEmpty?: boolean
  emptyValue?: React.ReactNode
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
    noValuesPlaceholder = "",
    emptyValue = <>&nbsp;</>,
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
  const sortedDataAscend = sorter !== undefined ? data?.sort(createSorter(sorting!.index, sorter)) : data
  const sortedData = sortedDataAscend !== undefined && sorting?.order === "DESCEND" ? [...sortedDataAscend].reverse() : sortedDataAscend

  return (
    <Wrap className={ className }>
      <HorizontalScrollContainer fixedColumnWidth={ fixedColumnWidth }>
        <StyledTable>
          { (showHeadWhenEmpty || !isEmpty) &&
            <TableHeader
              columns={ columns }
              hasFixedColumn={ hasFixedColumn }
              onChangeSorting={ setSorting }
              sorting={ sorting }
            />
          }
          <tbody>
            { !loading && sortedData?.map((rowData, index) => (
                <Row key={ index } onClick={ (event: React.MouseEvent) => onClickRow?.(rowData, index, event) } isClickable={ onClickRow !== undefined } >
                  { columns.map((column, index) => {
                      const valueNode = indexValueNode(rowData, column.dataIndex ?? index)
                      const node = getNode(valueNode) ?? column.emptyValue ?? emptyValue

                      return hasFixedColumn && index === columns.length - 1
                        ? <FixedTableCell key={ index } width={ fixedColumnWidth }>{ node }</FixedTableCell>
                        : <TableCell key={ index }>
                            { loading ? <SmallSkeleton maxRandomWidth={ (column.minWidth ?? 30) } /> : node }
                          </TableCell>

                    }
                  ) }
                </Row>
              ))
            }
            { loading && createLoadingData(columns.length, numLoadingRows).map((row, index) =>
              <Row key={ index }>
                { row.map((cell, index) =>
                    <Fragment key={ index }>
                    { hasFixedColumn && index === row.length - 1
                      ? <FixedTableCell width={ fixedColumnWidth }><SmallSkeleton maxRandomWidth={ columns[index].minWidth ?? 30 } /></FixedTableCell>
                      : <TableCell><SmallSkeleton maxRandomWidth={ columns[index].minWidth ?? 30 } /></TableCell>
                    }
                    </Fragment>
                ) }
              </Row>
            ) }
            { !loading && isEmpty && (
              <tr>
                <NoValuesPlaceholder colSpan={ columns.length }>
                  { noValuesPlaceholder }
                </NoValuesPlaceholder>
              </tr>
            ) }
          </tbody>
        </StyledTable>
      </HorizontalScrollContainer>
    </Wrap>
  )
}

export default Table
