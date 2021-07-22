import React from "react"
import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"
import styled from "styled-components"

type Props = {
  term: React.ReactNode
  value: React.ReactNode
  hasRowsSeperated?: boolean
}

type StyleProps = {
  hasRowsSeperated?: boolean
}

const Div = styled.div<StyleProps>`
  border-bottom: ${ ({ hasRowsSeperated }) => hasRowsSeperated ? "1px solid #E6E6E6" : "none" };
  &:last-child {
    border-bottom: none;
  }

  max-width: 800px;
  margin: 0;
  
  @media ${ breakpoint("min-width", "tabletM") } {
    margin-top: ${ themeSpacing(2) };
    margin-bottom: ${ themeSpacing(2) };
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  }
`

const Dt = styled.dt`
  color: ${ themeColor("tint","level5") };
  padding: ${ themeSpacing(3) } 0 0;
  @media ${ breakpoint("min-width", "tabletM") } {
    float: left;
    clear: both;
    word-wrap: break-word;
    width: 30%;
    padding: ${ themeSpacing(3) };
  }
`

const Dd = styled.dd`
  margin: 0;
  padding: ${ themeSpacing(3) } 0;
  @media ${ breakpoint("min-width", "tabletM") } {
    float: right;
    clear: right;
    width: 70%;
  }
`

const castValue = (value: React.ReactNode) => {
  if (value == null) return "-"
  if (typeof value === "number") return `${ value }`
  return value
}

const Definition: React.FC<Props> = ({ term, value, hasRowsSeperated }) => (
  <Div hasRowsSeperated={ hasRowsSeperated }>
    <Dt>{ term }</Dt>
    <Dd>{ castValue(value) }</Dd>
  </Div>
)
export default Definition
