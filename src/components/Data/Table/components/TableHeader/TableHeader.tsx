import React from "react"
import { Hidden } from "@amsterdam/asc-ui"
import StyledHeader from "./StyledHeader"
import Sorter from "./Sorter"
import { ColumnType, Sorting } from "../../types"

type Props = {
  lastColumnFixed?: boolean
  columns: ColumnType[]
  onChangeSorting: (sorting: Sorting) => void
  sorting?: Sorting
}

const TableHeader: React.FC<Props> = ({ columns, lastColumnFixed, onChangeSorting, sorting }) => (
  <thead>
    <tr>
      { columns.map(({ header, minWidth, sorter }, index) =>
        <StyledHeader
          key={ index }
          minWidth={ minWidth }
          isFixed={ lastColumnFixed && index === columns.length - 1 }
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

export default TableHeader
