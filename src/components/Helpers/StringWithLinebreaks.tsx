import React from "react"
import styled from "styled-components"

type Props = {
  s: string
}
const Span = styled.span`
  white-space: pre-line;
`

const StringWithLinebreaks: React.FC<Props> = ({ s }) => <Span>{ s }</Span>

export default StringWithLinebreaks
