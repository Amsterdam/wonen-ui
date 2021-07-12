import React from "react"
import styled from "styled-components"

const Span = styled.span`
  white-space: pre-line;
`

const TextWithLinebreaks: React.FC = ({ children }) => <Span>{ children }</Span>

export default TextWithLinebreaks
