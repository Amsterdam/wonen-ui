import React, { Fragment, useMemo } from "react"
import { breakpoint, themeColor } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"
import _get from "lodash.get"

import SmallSkeleton from "../components/SmallSkeleton"
import TableCell from "./components/TableCell/TableCell"
import TableHeader from "./components/TableHeader/TableHeader"
import FixedTableCell, { widthMobile as fixedColumnWidthMobile } from "./components/TableCell/FixedTableCell"
import TablePagination from "./components/TablePagination/TablePagination"
import devWarning from "../../../helpers/devWarning"
import usePagination, { DEFAULT_PAGE_SIZE } from "./hooks/usePagination"
import useSorter from "./hooks/useSorter"
import { TableTypes, Sorting, DESCEND } from "./types"

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

const Table = <R extends object = any>(props: TableTypes<R>) => {
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
  const onSortingTrigger = (sortingObj: Sorting) => {
    onChange?.(
      getPaginationData(),
      {
        dataIndex: sortingObj?.index !== undefined ? columns?.[sortingObj?.index].dataIndex : undefined,
        order: sortingObj?.order
      }
    )
  }

  const [mergedSorting, sorter, onChangeSorting, getSortingObj] = useSorter(
    columns,
    onSortingTrigger
  )

  const sortedDataAscend = useMemo<R[]>(() => {
    if (sorter !== undefined && typeof sorter === "function") {
      return [...data].sort(sorter)
    }
    return data
  }, [data, sorter])

  const sortedData = useMemo<R[]>(() => {
    if (sortedDataAscend !== undefined && mergedSorting?.order === DESCEND) {
      return [...sortedDataAscend].reverse()
    }
    return sortedDataAscend
  },[sortedDataAscend, mergedSorting?.order])

  // ========================== Pagination ==========================
  const onPaginationTrigger = (page: number) => {
    onChange?.({ page, collectionSize: mergedPagination.collectionSize  }, getSortingObj())
  }

  // Set warning if pagination prop page is given but not higher than 0.
  devWarning(
    pagination !== false && pagination?.page !== undefined  && typeof pagination.page == "number" && !(pagination.page > 0),
    "Table",
    "`page` of `pagination` must be greater than 0."
  )

  const [mergedPagination] = usePagination(
    sortedData.length,
    pagination,
    onPaginationTrigger
  )

  const getPaginationData = () => ({
    page: mergedPagination.page,
    collectionSize: mergedPagination.collectionSize
  })

  // Get paged data...
  const pageData = useMemo<R[]>(() => {
    if (pagination === false || !mergedPagination.pageSize) {
      return sortedData
    }

    const { page = 1, collectionSize, pageSize = DEFAULT_PAGE_SIZE } = mergedPagination

    // Dynamic table data
    if (sortedData.length < collectionSize!) {
      if (sortedData.length > pageSize) {
        devWarning(
          true,
          "Table",
          "`data` length is less than `pagination.collectionSize` but larger than `pagination.pageSize`. Please make sure your config is correct."
        )
        return sortedData.slice((page - 1) * pageSize, page * pageSize)
      }
      return sortedData
    }

    return sortedData.slice((page - 1) * pageSize, page * pageSize)
  }, [
    pagination,
    sortedData,
    mergedPagination
  ])

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
              sorting={ mergedSorting }
            />
          )}
          <tbody>
            {!loading && pageData?.map((rowData, index) => (
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
      {pagination !== undefined && <TablePagination { ...mergedPagination } />}
    </Wrap>
  )
}

export default Table
