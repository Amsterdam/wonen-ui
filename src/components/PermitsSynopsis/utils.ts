import moment from "moment"
import PermitType from "./PermitType"

// Specific for B&B

const GRANTED_STATUS = "verleend"

// Check if the permit date is valid
const isDateValid = ({ einddatum, datuM_TOT }: PermitType): boolean => {
  const now = moment() // current date and time
  // If there is a startdate(einddatum) and it is in the future, it is not valid.
  if (einddatum && moment(einddatum).isAfter(now)) {
    return false
  }
  // If there is an end date (datuM_TOT), it cannot be in the past.
  if (datuM_TOT && moment(datuM_TOT).isBefore(now)) {
    return false
  }
  return true
}

const isGrantedPermit = ({ resultaat }: PermitType): boolean => (
  !!resultaat && resultaat.toLowerCase().includes(GRANTED_STATUS)
)

export const isValidPermit = (permit: PermitType): boolean => {
  const hasValidDate = isDateValid(permit)
  const isGranted = isGrantedPermit(permit)
  return isGranted && hasValidDate
}

export const getValidPermits = (permits: PermitType[]) => (
  permits.filter(permit => isValidPermit(permit))
)
