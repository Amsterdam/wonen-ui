import React from "react"
import DOMPurify from "dompurify"
import replaceURLs from "./utils/replaceUrls"

type Props = {
  text: string
}

const TextWithURLs: React.FC<Props> = ({ text = "" }) => {
  // Add a hook to make all links open a new window
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    // set all elements owning target to target=_blank
    if ("target" in node) {
      node.setAttribute("target", "_blank")
      node.setAttribute("rel", "noopener noreferrer")
    }
  })

  const dirty = replaceURLs(text)
  // Clean HTML string and write into our DIV to prevent security issues.
  const clean = DOMPurify.sanitize(dirty)

  return <span dangerouslySetInnerHTML={ { __html: clean } } />
}

export default TextWithURLs
