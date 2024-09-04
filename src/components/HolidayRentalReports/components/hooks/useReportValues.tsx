import React from "react"
import DateDisplay  from "../../../DateDisplay/DateDisplay"
import type { RentalReport } from "../../types"

export default (report: RentalReport) => ({
  "Check in": <DateDisplay date={ report?.startDatum } />,
  "Check out": <DateDisplay date={ report?.eindDatum } />,
  "Gasten": report?.gasten,
  "Gewijzigd": report?.isAangepast ? "Ja" : "Nee",
  "Verwijderd": report?.isVerwijderd ? "Ja" : "Nee",
  "Aangemaakt op": <DateDisplay date={ report?.gemaaktOp } />
})
