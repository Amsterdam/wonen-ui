import React from "react"
import DefinitionList from "../../Data/DefinitionList/DefinitionList"
import type { HolidayRentalReport } from "../types"
import useReportsPerYearValues from "./hooks/useReportsPerYearValues"

type Props = {
  data: HolidayRentalReport[]
}

export const TITLE = "Vakantieverhuur meldingen"

const VacationRentalReport: React.FC<Props> = ({ data }) => {
  const reportValues = useReportsPerYearValues(data)

  return (
    <div style={{ marginBottom: 48 }}>
      {reportValues.map(([key, value]) => (
        <DefinitionList
          key={key}
          title={`${ TITLE } ${ key }`}
          data={{ "Nachten verhuurd": value }}
          headingSize="h4"
        />
      ))}
    </div>
  )
}

export default VacationRentalReport
