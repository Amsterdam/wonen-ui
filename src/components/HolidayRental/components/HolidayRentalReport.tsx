import React from "react"
import styled  from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import type VakantieverhuurReportInformation from "../VakantieverhuurReportInformation"
import Report from "./Report"
import useVacationRentalValues from "./hooks/useVacationRentalValues"

type Props = {
  vakantieverhuurReport: VakantieverhuurReportInformation
  title: string
  hasRowsSeperated: boolean
}

const StyledDiv = styled.div`
  margin-bottom: ${ themeSpacing(12) };
`

const VacationRentalReport: React.FC<Props> = ({ vakantieverhuurReport, title, hasRowsSeperated }) => {
  const values = useVacationRentalValues(vakantieverhuurReport)
  const { reports } = vakantieverhuurReport

  return (
    <StyledDiv>
      <DefinitionList
        title={ `${ title } ${ vakantieverhuurReport.year }` }
        data={ values }
        headingSize="h4"
        hasRowsSeperated={ hasRowsSeperated }
      />
      { reports.map(({ check_in_date, check_out_date, is_cancellation }, index: number) =>
          <Report
            key={ index }
            checkInDate={ check_in_date }
            checkOutDate={ check_out_date }
            isCancellation={ is_cancellation }
            hasRowsSeperated={ hasRowsSeperated }
          />
      ) }
    </StyledDiv>
  )
}

export default VacationRentalReport
