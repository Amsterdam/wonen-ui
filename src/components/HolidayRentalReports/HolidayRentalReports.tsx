import React from "react"
import { Spinner } from "@amsterdam/asc-ui"
import type { RentalReport } from "./types"
import ReportsPerYear from "./components/ReportsPerYear"
import Report from "./components/Report"
import Placeholder from "../Data/components/Placeholder"

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
      <Placeholder>Geen vakantieverhuur meldingen</Placeholder>
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
