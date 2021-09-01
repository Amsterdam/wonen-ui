import React from "react"
import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"
import styled, { css } from "styled-components"
import TextWithLinebreaks from "../../../TextWithLinebreaks/TextWithLinebreaks"

type Props = {
  term: React.ReactNode
  value: React.ReactNode
  hasRowsSeperated?: boolean
}

type StyleProps = {
  hasRowsSeperated?: boolean
}

const Div = styled.div<StyleProps>`
  border-bottom: 0 solid ${ themeColor("tint","level3") };
  
  ${ ({ hasRowsSeperated }) => 
    hasRowsSeperated && 
    css`
      padding: ${ themeSpacing(2) };
      border-width: 1px;
    `
  }
  &:last-child {
    border-bottom: none;
  }

  max-width: 800px;
  ${ ({ hasRowsSeperated }) => 
    hasRowsSeperated ? 
    css`
      margin-bottom: 0;
    `
    :
    css`
      margin-bottom: ${ themeSpacing(2) };
    `
  }
  
  @media ${ breakpoint("min-width", "tabletM") } {
    margin-bottom: 0;
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  }
`

const Dt = styled.dt<StyleProps>`
  color: ${ themeColor("tint","level5") };
  padding: ${ themeSpacing(1) } 0 ;
  @media ${ breakpoint("min-width", "tabletM") } {
    float: left;
    clear: both;
    word-wrap: break-word;
    width: 30%;
    padding-right: ${ themeSpacing(3) };
  }
`

const Dd = styled.dd<StyleProps>`
  margin: 0;
  padding: ${ themeSpacing(1) } 0;
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
    <Dt hasRowsSeperated={ hasRowsSeperated }>{ term }</Dt>
    <Dd hasRowsSeperated={ hasRowsSeperated }><TextWithLinebreaks>{ castValue(value) }</TextWithLinebreaks></Dd>
  </Div>
)
export default Definition
