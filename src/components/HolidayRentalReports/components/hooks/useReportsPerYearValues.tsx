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
        // Count the difference between last day of year and startDatum
        // New years eve counts for the previous year so add 1 day!
        const nightsPreviousYear =
          dayjs(item.startDatum)
            .endOf("year")
            .diff(dayjs(item.startDatum), "days") + 1
        // Count the difference between eindDatum and first day of year
        const nightsNextYear = dayjs(item.eindDatum).diff(
          dayjs(item.eindDatum).startOf("year"),
          "days"
        )

        totals[yearStart] = nightsPreviousYear + (totals[yearStart] || 0)
        totals[yearEnd] = nightsNextYear + (totals[yearEnd] || 0)
      }
    }
  })

  const sortedTotals = Object.entries(totals).sort(
    ([yearA], [yearB]) => Number(yearB) - Number(yearA)
  )
  return sortedTotals
}
