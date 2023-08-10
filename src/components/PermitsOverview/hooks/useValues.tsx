import React from "react"
import DateDisplay from "../../DateDisplay/DateDisplay"
import type Permit from "../Permit"

export default (permit: Permit) => {
  const { permit_granted, permit_type, details } = permit

  const isGranted = permit_granted === "GRANTED"
  const permitIsForBAndB = permit_type.startsWith("B&B")
  const endDateBAndB = details?.DATE_VALID_UNTIL ?? details?.DATE_VALID_TO
  const endDate = details?.DATE_VALID_TO ?? details?.DATE_VALID_UNTIL

  const values = {
    "Resultaat": details?.RESULT,
    "Omschrijving zaak": details?.SUBJECT,
    "Soort vergunning": details?.PERMIT_NAME,
    "Aangevraagd door": details?.APPLICANT,
    ...permitIsForBAndB ? {
      "Vergunninghouder": details?.HOLDER
    } : {},
    "Locatie": details?.ADDRESS,
    ...isGranted ? {
      "Verleend per": <DateDisplay date={ details?.DATE_VALID_FROM } emptyText="-" />
    } : {},
    ...isGranted && permitIsForBAndB && endDateBAndB ? {
      "Geldig tot en met": <DateDisplay date={ endDateBAndB } />
    } : {
      "Geldig tot": <DateDisplay date={ endDate } emptyText="-" />
    },
    ...permit_granted === "NOT_GRANTED" ? {
      "Datum besluit": <DateDisplay date={ details?.DATE_DECISION } emptyText="-" />
    } : {}
  }

  return values
}
