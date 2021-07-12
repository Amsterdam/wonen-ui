import React from "react"
import replaceURLs from "./utils/replaceUrls"
import DOMPurify from "dompurify"

type Props = {
  text: string
}

const TextWithURLs: React.FC<Props> = ({ text }) => <span dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(replaceURLs(text)) } } />

export default TextWithURLs