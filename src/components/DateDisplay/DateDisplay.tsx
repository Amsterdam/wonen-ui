import React from "react"
import styled from "styled-components"

export const emptyTextDefault = "-"
export const invalidDateTextDefault = "Ongeldige datum"

type Props = {
  date: string | undefined
  full?: boolean
  className?: string
  emptyText?: string
  invalidDateText?: string
}

const months = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december"
]

export const isDate = (d: unknown) => {
  if (d instanceof Date) return isValidDate(d)
  if (typeof d === "string") return isValidDate(new Date(d))
  return false
}
export const isValidDate = (d: Date) => !Number.isNaN(d.getFullYear())

const twoCharNum = (num: number) => `${ num < 10 ? "0" : "" }${ num }`
export const displayDate = (date: string | Date, full = false, invalidDateText = invalidDateTextDefault) => {
  const d = typeof date === "string" ? new Date(date) : date
  if (!isValidDate(d)) return invalidDateText
  return full ?
    `${ twoCharNum(d.getDate()) } ${ months[d.getMonth()] } ${ d.getFullYear() }` :
    `${ twoCharNum(d.getDate()) }-${ twoCharNum(d.getMonth() + 1) }-${ d.getFullYear() }`
}
export const displayTime = (date: string | Date, addSuffix?: boolean, invalidDateText = invalidDateTextDefault) => {
  const d = typeof date === "string" ? new Date(date) : date
  if (!isValidDate(d)) return invalidDateText
  return `${ twoCharNum(d.getHours()) }:${ twoCharNum(d.getMinutes()) }${ addSuffix ? " uur" : "" }`
}

const Span = styled.span`
  white-space: nowrap;
`

const DateDisplay: React.FC<Props> = ({ date, full = false, emptyText = emptyTextDefault, invalidDateText = invalidDateTextDefault, className }) =>
  <Span className={ className }>{ date !== undefined ? displayDate(date, full, invalidDateText) : emptyText }</Span>

export default DateDisplay
