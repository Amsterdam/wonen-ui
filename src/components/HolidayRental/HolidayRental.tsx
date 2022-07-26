import React from "react"
import { Spinner, Paragraph, Heading } from "@amsterdam/asc-ui"
import type VakantieverhuurReportInformation from "./VakantieverhuurReportInformation"
import HolidayRentalReport from "./components/HolidayRentalReport"

type Props = {
  data: VakantieverhuurReportInformation[]
  loading?: boolean
  showRecentYearOnly?: boolean
  horizontalBordered?: boolean
}

export const TITLE = "Vakantieverhuur meldingen"

const HolidayRental: React.FC<Props> = ({
  data, loading = false, horizontalBordered = true, showRecentYearOnly = false
}) => {
  const holidayRentalData = data !== undefined ? data : []
  holidayRentalData.sort((a, b) => b.year - a.year ) // Recent years on top.
  const vakantieverhuurReports = showRecentYearOnly && holidayRentalData.length > 0
    ? [ { ...holidayRentalData[0] } ] : holidayRentalData

  if (loading) {
    return <Spinner />
  }
  if (!(vakantieverhuurReports.length > 0)) {
    return (
      <>
        <Heading forwardedAs="h4">{ TITLE }</Heading>
        <Paragraph>Geen vakantieverhuur meldingen</Paragraph>
      </>
    )
  }
  return (
    <>
      { vakantieverhuurReports.map((vakantieverhuurReport) => (
          <HolidayRentalReport
            vakantieverhuurReport={ vakantieverhuurReport }
            title={ TITLE }
            key={ vakantieverhuurReport.year }
            horizontalBordered={ horizontalBordered }
          />
        ))
      }
    </>
  )
}

export default HolidayRental
