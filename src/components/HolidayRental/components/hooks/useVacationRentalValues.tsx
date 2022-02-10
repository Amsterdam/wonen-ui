import React from "react"
import type VakantieverhuurReportInformation from "../../VakantieverhuurReportInformation"

export default (data?: VakantieverhuurReportInformation | null) => {
  if (data == null) return

  const { rented_days_count, is_rented_today, planned_days_count } = data

  return ({
    "Nachten verhuurd": <strong>{ rented_days_count }</strong>,
    "Vandaag verhuurd": is_rented_today ? "Ja" : "Nee",
    "Nachten gepland": planned_days_count
  })
}
