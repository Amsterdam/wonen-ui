import React from "react"
import { Spinner } from "@amsterdam/asc-ui"
import type { HolidayRentalReport } from "./types"
import ReportsPerYear from "./components/ReportsPerYear"
import Report from "./components/Report"
import { Placeholder, LoadingRows } from "../Data/components"

type Props = {
  data: HolidayRentalReport[]
  horizontalBordered?: boolean
  loading?: boolean
  loadingRows?: number
}

/**
 *  Overview of Vakantieverhuur meldingen.
 */

const HolidayRentalReports: React.FC<Props> = ({
  data = [],
  horizontalBordered = true,
  loading = false,
  loadingRows
}) => {
  if (loading) {
    return loadingRows ? <LoadingRows numRows={loadingRows} /> : <Spinner data-testid="spinner"/>
  }
  if (!(data.length > 0)) {
    return <Placeholder>Geen vakantieverhuur meldingen</Placeholder>
  }
  return (
    <>
      <ReportsPerYear data={data} />
      {data.map((report) => (
        <Report
          report={report}
          key={`${ report.startDatum }-${ report.eindDatum } `}
          horizontalBordered={horizontalBordered}
        />
      ))}
    </>
  )
}

export default HolidayRentalReports
