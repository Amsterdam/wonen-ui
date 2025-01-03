import React from "react"
import type { HolidayRentalRegistration } from "../../types"
import DateDisplay from "../../../DateDisplay/DateDisplay"

const formatRequester = (requester: HolidayRentalRegistration["requester"]) => {
  const { personalDetails } = requester
  const name = `${ personalDetails?.firstName ?? "" } ${ personalDetails?.lastNamePrefix ? `${ personalDetails?.lastNamePrefix } ` : "" }${ personalDetails?.lastName ?? "" }`
  return name
}

export default (registration: HolidayRentalRegistration) => {
  const {
    requester,
    agreementDate,
    createdAt,
    requestForBedAndBreakfast
  } = registration

  const requesterName = formatRequester(requester)

  const values = {
    "Aanvrager": requesterName,
    "E-mail": requester?.email,
    "Aangemaakt": <DateDisplay date={createdAt} emptyText="-" />,
    "Overeenkomst": <DateDisplay date={agreementDate} emptyText="-" />,
    "B&B verzoek": requestForBedAndBreakfast ? "Ja" : "Nee"
  }

  return values
}
