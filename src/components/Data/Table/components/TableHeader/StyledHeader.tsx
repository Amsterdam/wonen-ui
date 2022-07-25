import styled, { css } from "styled-components"
import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"

import useNodeDimensions from "../../../hooks/useNodeDimensions/useNodeDimensions"
import useNodeByReference from "../../../hooks/useNodeByReference/useNodeByReference"

type StyledProps = {
  isFixed?: boolean
  minWidth?: number
  w?: number
  h?: number
}

const StyledTableHeader = styled.th<StyledProps>`
  text-align: left;
  border-bottom: 1px solid ${ themeColor("tint", "level4") };
  padding: ${ themeSpacing(2) } ${ themeSpacing(3) };
  min-width: ${ ({ minWidth }) => minWidth ? `${ minWidth }px` : "auto" };
  width: ${ ({ w }) => w ? `${ w }px` : "auto" };
  white-space: nowrap;
  height: ${ ({ h }) => h ? `${ h }px;` : "auto" };

  ${ ({ isFixed, minWidth }) => isFixed && css`
      position: absolute;
      right: 0;
      width: ${ minWidth ? `${ minWidth }px` : "auto" };

      /* hide text on mobile for fixed column */
      opacity: 0;
      @media screen and ${ breakpoint("min-width", "laptopM") } {
        opacity: 100;
      }
  ` }

`

type Props = {
  width?: number
  isFixed?: boolean
  minWidth?: number
}

/**
 * This table-cell is positioned absolutely, to mimic a 'fixed-column' on smaller screens.
 *
 * Its positioned absolutely and therefore doesn't automatically follow the 'document-flow' anymore.
 * We calculate its height based on the height of the parent-node.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
 */

 const StyledHeader: React.FC<Props> = ({ children, width, minWidth, isFixed }) => {
  // Grab parent node, a table-row element (TR).
  const { ref, node } = useNodeByReference<HTMLTableCellElement>(node => node?.parentElement ?? undefined)
  // Grab dimensions of the table-row.
  const dimensions = useNodeDimensions(node)
  // Pass height of the table-row.
  return (
    <StyledTableHeader
      ref={ref}
      h={dimensions?.height}
      w={ width }
      minWidth={ minWidth }
      isFixed={ isFixed }
    >
      { children }
    </StyledTableHeader>
  )
}

export default StyledHeader
