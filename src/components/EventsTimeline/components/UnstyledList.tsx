import styled from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"

export default styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 0 0 ${ themeSpacing(1) } 0;
  }
`