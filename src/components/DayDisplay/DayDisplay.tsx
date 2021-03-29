import React from "react"
import { isValidDate, invalidDateText } from "../DateDisplay/DateDisplay"
import { capitalizeString } from "../Helpers/helpers"

type Props = {
  date: string
  capitalize: boolean
}

const days = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag"
]

export const getDay = (date: string | Date, capitalize = false) => {
  const d = typeof date === "string" ? new Date(date) : date
  if (!isValidDate(d)) return invalidDateText
  const day = days[d.getDay()]
  return capitalize ? capitalizeString(day) : day
}

const DayDisplay: React.FC<Props> = ({ date, capitalize = false }) =>
  <>{ getDay(date, capitalize) }</>
export default DayDisplay
