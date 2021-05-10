import React from "react"
import styled from "styled-components"
import ReplaceURLs from "./ReplaceUrls"

type Props = {
  s: string
}
const Span = styled.span`
  white-space: pre-line;
`

const createMarkup = (s: string = "") =>  ({ __html: s })
const SpanWithLinebreaks: React.FC<Props> = ({ s }) => <Span dangerouslySetInnerHTML={ createMarkup( ReplaceURLs( s ) ) } />

export default SpanWithLinebreaks
