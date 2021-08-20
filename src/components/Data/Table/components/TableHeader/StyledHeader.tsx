import styled, { css } from "styled-components"
import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"

type Props = {
  isFixed?: boolean
  minWidth?: number
  width?: number
}

const StyledHeader = styled.th<Props>`
  text-align: left;
  border-bottom: 1px solid ${ themeColor("tint", "level4") };
  padding: ${ themeSpacing(2) } ${ themeSpacing(3) };
  min-width: ${ ({ minWidth }) => minWidth ? `${ minWidth }px` : "auto" };
  width: ${ ({ width }) => width ? `${ width }px` : "auto" };
  white-space: nowrap;

  ${ ({ isFixed, minWidth }) => isFixed && css`
      position: absolute;
      right: 0;
      width: ${ minWidth ? `${ minWidth }px` : "auto" } };

      /* hide text on mobile for fixed column */
      opacity: 0;
      @media screen and ${ breakpoint("min-width", "laptopM") } {
        opacity: 100;
      })
  ` }

`

export default StyledHeader
