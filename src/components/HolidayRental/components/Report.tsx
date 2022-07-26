import React from "react"
import styled  from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"
import useVacationRentalReportValues from "./hooks/useVacationRentalReportValues"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import type { VakantieverhuurReportInformation, VakantieverhuurReport } from "../VakantieverhuurReportInformation"

type Props = {
  report: VakantieverhuurReport
  year: VakantieverhuurReportInformation["year"]
  horizontalBordered: boolean
}

const StyledDiv = styled.div`
  margin-top: ${ themeSpacing(3) };
`

const VactionRentalReport: React.FC<Props> = ({ report, year, horizontalBordered }) => {
  const {
    check_in_date: checkInDate,
    check_out_date: checkOutDate,
    is_cancellation: isCancellation,
    report_date: reportDate,
    days_count_per_year: daysCountPerYear
  } = report

  const nightsRented = daysCountPerYear?.[year]
  const title = `${ isCancellation ? "Afmelding (-" : "Melding (+" }${ nightsRented } nachten)`
  const values = useVacationRentalReportValues(checkInDate, checkOutDate, reportDate)

  return (
    <StyledDiv>
      <DefinitionList
        title={ title }
        data={ values }
        headingSize="h4"
        horizontalBordered={ horizontalBordered }
      />
    </StyledDiv>
  )
}

export default VactionRentalReport