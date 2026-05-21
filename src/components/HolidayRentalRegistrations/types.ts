export type HolidayRentalRegistration = {
  registrationNumber: string
  requester: Record<string, any>
  rentalHouse: Record<string, any>
  requestForOther: boolean
  createdAt: string
  agreementDate: string
}
