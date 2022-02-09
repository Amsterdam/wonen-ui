import DateDisplay  from "../../../DateDisplay/DateDisplay"

export default (checkInDate: string, checkOutDate: string) => {
  const values = [
    ["Check in", <DateDisplay date={ checkInDate } />],
    ["Check out", <DateDisplay date={ checkOutDate } />]
  ]
  return Object.fromEntries(values)
}