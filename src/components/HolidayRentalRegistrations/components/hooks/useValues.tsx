import React from "react"
import type { HolidayRentalRegistration } from "../../types"
import DateDisplay from "../../../DateDisplay/DateDisplay"

const formatPersonName = (personalDetails: Record<string, any>) => {
  if (!personalDetails) return ""
  const { firstName, lastNamePrefix, lastName } = personalDetails
  const name = `${ firstName ?? "" } ${ lastNamePrefix ? `${ lastNamePrefix } ` : "" }${ lastName ?? "" }`
  return name
}

export default (registration: HolidayRentalRegistration) => {
  const {
    requester,
    agreementDate,
    createdAt,
    requestForBedAndBreakfast,
    rentalHouse: { owner }
  } = registration

  const values: Record<string, any> = {
    "Aanvrager": formatPersonName(requester?.personalDetails),
    "E-mail": requester?.email,
    "Aangemaakt": <DateDisplay date={createdAt} emptyText="-" />,
    "Overeenkomst": <DateDisplay date={agreementDate} emptyText="-" />,
    "B&B verzoek": requestForBedAndBreakfast ? "Ja" : "Nee"
  }

  if (owner?.personalDetails) {
    values["Aangevraagd voor"] = formatPersonName(owner?.personalDetails)
  }

  return values
}
