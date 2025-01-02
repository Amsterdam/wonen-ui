import dayjs from "dayjs"
import type { HolidayRentalReport } from "../../types"

export default (data: HolidayRentalReport[]) => {
  let totals: { [key: string]: number } = {}
  data.forEach((item) => {
    // Don't count removed items
    if (!item.isVerwijderd) {
      const yearStart = dayjs(item.startDatum).year()
      const yearEnd = dayjs(item.eindDatum).year()
      // Add all nachten if startDate and endDate are in the same year.
      if (yearStart === yearEnd) {
        totals[yearStart] = item.nachten + (totals[yearStart] || 0)
      } else {
        // Count number of days. January 1 counts as night for the previous year so subtract 1.
        const today = dayjs()
        // Get the first day of the current year
        const firstDayOfYear = dayjs().startOf("year")
       // Count number of days. January 1 counts as night for the previous year so subtract 1.
        const nightsNextYear = today.diff(firstDayOfYear, "day") - 1
        // Count difference between last day of year end startDatum
        // New years eve counts for the previous year so add 1 day!
        const nightsPreviousYear = dayjs(item.startDatum).endOf("year").diff(dayjs(item.startDatum), "days") + 1

        totals[yearStart] = nightsPreviousYear + (totals[yearStart] || 0)
        totals[yearEnd] = nightsNextYear + (totals[yearEnd] || 0)
      }
    }
  })
  return totals
}
