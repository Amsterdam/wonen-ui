import React from "react"
import DateDisplay from "../../DateDisplay/DateDisplay"
import type PermitType from "../PermitType"

export default (permit: PermitType) => {
  const {
    resultaat, status, kenmerk, initator,
    vergunninghouder, startdatum, einddatum
  } = permit

  const values = {
    "Resultaat": resultaat ?? undefined,
    "Status": status,
    "Kenmerk": kenmerk,
    "Aangevraagd door": initator,
    "Vergunninghouder": vergunninghouder,
    "Startdatum": <DateDisplay date={ startdatum } emptyText="-" />,
    "Einddatum": <DateDisplay date={ einddatum ?? undefined } emptyText="-" />
  }

  return values
}
