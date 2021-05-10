import React from "react"
import styled from "styled-components"
import ReplaceURLs from "./ReplaceUrls"

type Props = {
  s: string
}
const Span = styled.span`
  white-space: pre-line;
`

const SpanWithLinebreaks: React.FC<Props> = ({ s }) => <Span dangerouslySetInnerHTML={ { __html: ReplaceURLs( s ) } } />

export default SpanWithLinebreaks
