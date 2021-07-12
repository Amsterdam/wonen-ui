import React from "react"
import DOMPurify from "dompurify"
import replaceURLs from "./utils/replaceUrls"

type Props = {
  text: string
}

const TextWithURLs: React.FC<Props> = ({ text }) => <span dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize(replaceURLs(text)) } } />

export default TextWithURLs