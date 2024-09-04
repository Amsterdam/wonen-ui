export type RentalReport = {
  startDatum: string // date-time
  eindDatum: string // date-time
  nachten: number
  gasten: number
  isAangepast: Boolean
  isVerwijderd: Boolean
  gemaaktOp: string // date-time
}
