import React from "react"
import styled from "styled-components"
import replaceURLs from "./replaceUrls"

type Props = {
  s: string
}
const Span = styled.span`
  white-space: pre-line;
`

const SpanWithLinebreaks: React.FC<Props> = ({ s }) => <Span dangerouslySetInnerHTML={ { __html: replaceURLs( s ) } } />

export default SpanWithLinebreaks
