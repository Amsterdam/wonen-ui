import { breakpoint, themeColor, themeSpacing } from "@amsterdam/asc-ui"
import styled from "styled-components"

type Props = {
  term: React.ReactNode
  value: React.ReactNode
}

const Div = styled.div`
  display: flex;
  border-bottom: 1px solid ${ themeColor("tint","level3") };
  &:last-child {
    border-bottom: none;
  }
`

const Dt = styled.dt`
  width: 45%;
  @media screen and ${ breakpoint("min-width", "laptopM") } {
    width: 30%;
  }
  padding: ${ themeSpacing(3) } 0;
  color: ${ themeColor("tint", "level5") };
`

const Dd = styled.dd`
  padding: ${ themeSpacing(3) } 0;
  width: 70%;
`

const castValue = (value: React.ReactNode) => {
  if (value == null) return "-"
  if (typeof value === "number") return `${ value }`
  return value
}

const Definition: React.FC<Props> = ({ term, value }) => (
  <Div>
    <Dt>{ term }</Dt>
    <Dd>{ castValue(value) }</Dd>
  </Div>
)
export default Definition