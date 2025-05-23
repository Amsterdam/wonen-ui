import React from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/nl"

dayjs.locale("nl") // Global setting for Dutch locale

type Props = {
  date: string | undefined
  full?: boolean
  className?: string
  emptyText?: string
  invalidDateText?: string
}

const emptyTextDefault = "-"
const invalidDateTextDefault = "Ongeldige datum"

export const isDate = (
  d: string | number | Date | Dayjs | null | undefined
): boolean => {
  if (d === undefined || d === null) return false
  if (typeof d === "number") return false
  return dayjs(d).isValid()
}

const formatDate = (date: string | Date, format?: string): string => {
  const d = dayjs(date)
  if (!d.isValid()) return invalidDateTextDefault
  return d.format(format || "DD-MM-YYYY")
}

const capitalizeFirst = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)

const formatLongDate = (date: string | Date): string => {
  const d = dayjs(date)
  if (!d.isValid()) return invalidDateTextDefault
  const formatted = d.format("dddd D MMMM YYYY")
  return capitalizeFirst(formatted)
}

export const displayDate = (
  date: string | Date,
  longFormat = false,
  invalidDateText = invalidDateTextDefault
) => {
  if (!dayjs(date).isValid()) return invalidDateText
  return longFormat ? formatLongDate(date) : formatDate(date)
}

export const displayTime = (
  date: string | Date,
  addSuffix?: boolean,
  invalidDateText = invalidDateTextDefault
) => {
  const d = dayjs(date)
  if (!d.isValid()) return invalidDateText
  return `${d.format("HH:mm")}${addSuffix ? " uur" : ""}`
}

const DateDisplay: React.FC<Props> = ({
  date,
  full = false,
  emptyText = emptyTextDefault,
  invalidDateText = invalidDateTextDefault,
  className
}) => (
  <span style={{ whiteSpace: "nowrap" }} className={className}>
    {date !== undefined ? displayDate(date, full, invalidDateText) : emptyText}
  </span>
)

export default DateDisplay
