import React from "react"
import styled  from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"
import useReportValues from "./hooks/useReportValues"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import type { RentalReport } from "../types"

type Props = {
  report: RentalReport
  horizontalBordered: boolean
}

const StyledDiv = styled.div`
  margin-top: ${ themeSpacing(3) };
`

const Report: React.FC<Props> = ({ report, horizontalBordered }) => {
  const title = `${ report.isVerwijderd ? "Afmelding (-" : "Melding (+" }${ report?.nachten } nachten)`
  const values = useReportValues(report)

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

export default Report