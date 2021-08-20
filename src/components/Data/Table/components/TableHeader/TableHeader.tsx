import { Hidden } from "@amsterdam/asc-ui"

import StyledHeader from "./StyledHeader"
import Sorter from "./Sorter"

type Props = {
  hasFixedColumn?: boolean
  columns: { 
    header?: React.ReactNode 
    minWidth?: number 
    sorter?: (a: any, b: any) => number
  }[]
  onChangeSorting: (sorting?: any) => void
  sorting: any
}

const TableHeader: React.FC<Props> = ({ columns, hasFixedColumn, onChangeSorting, sorting }) => (
  <thead>
    <tr>
      { columns.map(({ header, minWidth, sorter }, index) =>
        <StyledHeader 
          key={ index } 
          minWidth={ minWidth } 
          isFixed={ hasFixedColumn && index === columns.length - 1 }
        >
          { sorter ? 
            <Sorter header={ header } sorting={ sorting } onChangeSorting={ onChangeSorting } index={ index } /> : (
              header ?? <Hidden maxBreakpoint="laptopM">&nbsp;</Hidden>
            )
          }
        </StyledHeader>
      ) }
    </tr>
  </thead>
)

export default TableHeader
