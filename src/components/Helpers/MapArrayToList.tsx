import { themeSpacing } from "@amsterdam/asc-ui"
import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 0 0 ${ themeSpacing(1) } 0;
    line-height: 1.15;
  }
`
const MapArrayToList = (list: string[]) =>
<Ul>
  { list.map((item: string, index: number) =>
      <li key={ index }>{ item }</li>
  )}
</Ul>

export default MapArrayToList