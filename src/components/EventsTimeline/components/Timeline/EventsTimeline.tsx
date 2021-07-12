import styled from "styled-components"
import { themeSpacing, breakpoint } from "@amsterdam/asc-ui"

type Props = {
  spacingHorizontal: number
}

export default styled.div<Props>`
  > div {
    position: relative;
    margin: 0 ${ ( { spacingHorizontal } ) => themeSpacing( -spacingHorizontal ) } ${ themeSpacing(5) };
    padding: 0 ${ ( { spacingHorizontal } ) => themeSpacing( spacingHorizontal ) };

    @media screen and ${ breakpoint("min-width", "tabletS") } {
      margin: 0 ${ ( { spacingHorizontal } ) => themeSpacing( -(3 - spacingHorizontal) ) } ${ themeSpacing(5) };
      padding: 0 ${ ( { spacingHorizontal } ) => themeSpacing( 3 - spacingHorizontal ) };
    }

    // hide the vertical line in the last item
    &:last-child {
      > div:last-child {
        > div:first-child {
          &:after {
            display: none;
          }
        }
      }
    }
  }

  button {
    outline: none;
  }
`