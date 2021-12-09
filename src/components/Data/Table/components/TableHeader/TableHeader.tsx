import React from "react"
import { Hidden } from "@amsterdam/asc-ui"
import StyledHeader from "./StyledHeader"
import Sorter from "./Sorter"
import { Columns, Sorting } from "../../types"

type Props<R> = {
  hasFixedColumn?: boolean
  columns: Columns<R>
  onChangeSorting: (sorting: Sorting) => void
  sorting?: Sorting
}

const TableHeader = <R extends object = any>(props: Props<R>) => {
  const { columns, hasFixedColumn, onChangeSorting, sorting } = props
  return (
    <thead>
      <tr>
        { columns.map(({ header, minWidth, sorter }, index) =>
          <StyledHeader
            key={ index }
            minWidth={ minWidth }
            isFixed={ hasFixedColumn && index === columns.length - 1 }
          >
            { sorter ? (
                <Sorter header={ header } sorting={ sorting } onChangeSorting={ onChangeSorting } index={ index } />
              ) : (
                header ?? <Hidden maxBreakpoint="laptopM">&nbsp;</Hidden>
              )
            }
          </StyledHeader>
        ) }
      </tr>
    </thead>
  )
}

export default TableHeader
