import React from "react"
import { Spinner, Paragraph, Heading } from "@amsterdam/asc-ui"
import type { RentalReport } from "./types"
import ReportsPerYear, { TITLE } from "./components/ReportsPerYear"
import Report from "./components/Report"

type Props = {
  data: RentalReport[]
  loading?: boolean
  horizontalBordered?: boolean
}

const HolidayRentalReports: React.FC<Props> = ({
  data = [], loading = false, horizontalBordered = true
}) => {

  if (loading) {
    return <Spinner data-testid="spinner"/>
  }
  if (!(data.length > 0)) {
    return (
      <>
        <Heading forwardedAs="h4">{ TITLE }</Heading>
        <Paragraph>Geen vakantieverhuur meldingen</Paragraph>
      </>
    )
  }
  return (
    <>
      <ReportsPerYear data={ data } />
      { data.map((report) => (
          <Report
            report={ report }
            key={ `${ report.startDatum }-${ report.eindDatum } `}
            horizontalBordered={ horizontalBordered }
          />
        ))
      }
    </>
  )
}

export default HolidayRentalReports
