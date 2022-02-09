import styled  from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"
import useNumberOfDaysBetweenDates from "./hooks/useNumberOfDaysBetweenDates"
import useVacationRentalReportValues from "./hooks/useVacationRentalReportValues"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"

type Props = {
  checkInDate: string
  checkOutDate: string
  isCancellation: boolean
  hasRowsSeperated: boolean
}

const StyledDiv = styled.div`
  margin-top: ${ themeSpacing(3) };
`

const VactionRentalReport: React.FC<Props> = ({
  checkInDate, checkOutDate, isCancellation, hasRowsSeperated
}) => {

  const nightsRented = useNumberOfDaysBetweenDates(checkInDate, checkOutDate)
  const title = `${ isCancellation ? "Afmelding" : "Melding" } (${ nightsRented } nachten)`
  const values = useVacationRentalReportValues(checkInDate, checkOutDate)

  return (
    <StyledDiv>
      <DefinitionList
        title={ title }
        data={ values }
        headingSize="h4"
        hasRowsSeperated={ hasRowsSeperated }
      />
    </StyledDiv>
  )
}

export default VactionRentalReport