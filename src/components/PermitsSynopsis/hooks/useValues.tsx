import React from "react"
import DateDisplay from "../../DateDisplay/DateDisplay"
import type PermitType from "../PermitType"

export default (permit: PermitType) => {
  const {
    resultaat,
    status,
    kenmerk,
    vergunninghouder,
    startdatum,
    einddatum,
    datuM_TOT,
    initator,
    omschrijvinG_KORT
  } = permit

  const values = {
    Resultaat: resultaat ?? undefined,
    Omschrijving: omschrijvinG_KORT ?? undefined,
    Status: status,
    Kenmerk: kenmerk,
    "Aangevraagd door": initator,
    "Aangevraagd op": <DateDisplay date={startdatum} emptyText="-" />,
    Vergunninghouder: vergunninghouder,
    "Verleend per": <DateDisplay date={einddatum ?? undefined} emptyText="-" />,
    "Geldig tot en met": (
      <DateDisplay date={datuM_TOT ?? undefined} emptyText="-" />
    )
  }

  return values
}
