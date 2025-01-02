import React from "react"
import styled  from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import type { HolidayRentalReport } from "../types"
import useReportsPerYearValues from "./hooks/useReportsPerYearValues"

type Props = {
  data: HolidayRentalReport[]
}

export const TITLE = "Vakantieverhuur meldingen"

const StyledDiv = styled.div`
  margin-bottom: ${ themeSpacing(12) };
`

const VacationRentalReport: React.FC<Props> = ({ data }) => {
  const reportValues = useReportsPerYearValues(data)

  return (
    <StyledDiv>
      { Object.entries(reportValues).map(([key, value]) => (
        <DefinitionList
          key={ key }
          title={ `${ TITLE } ${ key }` }
          data={{ "Nachten verhuurd": value }}
          headingSize="h4"
        />
      ))}
    </StyledDiv>
  )
}

export default VacationRentalReport
