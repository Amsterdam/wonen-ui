
import React from "react"
import styled from "styled-components"
import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"

import useNodeDimensions from "../../../hooks/useNodeDimensions/useNodeDimensions"
import useNodeByReference from "../../../hooks/useNodeByReference/useNodeByReference"

type StyledTDProps = {
  w?: number
  h?: number
}

export const widthMobile = 48

const StyledTd = styled.td<StyledTDProps>`
  padding: ${ themeSpacing(4) } ${ themeSpacing(3) };
  vertical-align: top;

  position: absolute;
  right: 0;

  border-left: 1px solid ${ themeColor("tint", "level3") };

  width: ${ widthMobile }px;
  @media screen and ${ breakpoint("min-width", "laptopM") } {
    width: ${ ({ w }) => `${ w ?? widthMobile }px;` };
  }

  height: ${ ({ h }) => h ? `${ h }px;` : "auto" };
`

type Props = {
  width?: number
}

/**
 * This table-cell is positioned absolutely, to mimic a 'fixed-column' on smaller screens.
 *
 * Its positioned absolutely and therefore doesn't automatically follow the 'document-flow' anymore.
 * We calculate its height based on the height of the parent-node.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
 */
const FixedTableCell: React.FC<Props> = ({ children, width }) => {
  // Grab parent node, a table-row element (TR).
  const { ref, node } = useNodeByReference<HTMLTableCellElement>(node => node?.parentElement ?? undefined)
  // Grab dimensions of the table-row.
  const dimensions = useNodeDimensions(node)
  // Pass height of the table-row.
  return <StyledTd ref={ref} h={dimensions?.height} w={width}>
    { children }
  </StyledTd>
}


export default FixedTableCell
