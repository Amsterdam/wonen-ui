import React from "react"
import styled from "styled-components"

type Props = {
  date: string
  full?: boolean
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

export const isValidDate = (d: Date) => !Number.isNaN(d.getFullYear())
export const invalidDateText = "Ongeldige datum"
const twoCharNum = (num: number) => `${ num < 10 ? "0" : "" }${ num }`
export const displayDate = (date: string | Date, full = false) => {
  const d = typeof date === "string" ? new Date(date) : date
  if (!isValidDate(d)) return invalidDateText
  return full ?
    `${ twoCharNum(d.getDate()) } ${ months[d.getMonth()] } ${ d.getFullYear() }` :
    `${ twoCharNum(d.getDate()) }-${ twoCharNum(d.getMonth() + 1) }-${ d.getFullYear() }`
}
export const displayTime = (date: string | Date, addSuffix?: boolean) => {
  const d = typeof date === "string" ? new Date(date) : date
  if (!isValidDate(d)) return invalidDateText
  return `${ twoCharNum(d.getHours()) }:${ twoCharNum(d.getMinutes()) }${ addSuffix ? " uur" : "" }`
}

const Span = styled.span`
  white-space: nowrap;
`

const DateDisplay: React.FC<Props> = ({ date, full = false }) => <Span>{ displayDate(date, full) }</Span>

export default DateDisplay
