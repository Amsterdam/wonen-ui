import React from "react"
import DateDisplay  from "../../../DateDisplay/DateDisplay"

export default (checkInDate: string, checkOutDate: string, reportDate: string) => ({
  "Check in": <DateDisplay date={ checkInDate } />,
  "Check out": <DateDisplay date={ checkOutDate } />
})
