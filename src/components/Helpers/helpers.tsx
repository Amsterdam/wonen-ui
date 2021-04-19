import React, { ReactNode } from "react"
import styled from "styled-components"

export const capitalizeString = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const appendTimeToDate = (date: string) => {
  if (date === "") return ""
  return `${ date }T12:00:00+0200`
}

export const stringWithLinebreaks = (s: string ): ReactNode => {
    const Span = styled.span`
    white-space: pre-line;
  `
  if ( s === undefined) return
  return  <Span>{s}</Span>
}
