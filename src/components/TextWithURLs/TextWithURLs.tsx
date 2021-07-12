import React from "react"
import replaceURLs from "./utils/replaceUrls"

type Props = {
  text: string
}

// TODO: This allows for XSS attacks!
const TextWithURLs: React.FC<Props> = ({ text }) => <span dangerouslySetInnerHTML={ { __html: replaceURLs(text) } } />

export default TextWithURLs