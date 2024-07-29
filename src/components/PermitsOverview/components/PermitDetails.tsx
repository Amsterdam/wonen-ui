import React from "react"
import styled from "styled-components"
import { themeSpacing, Icon } from "@amsterdam/asc-ui"
import dayjs from "dayjs"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import { Check, Close } from "../../Icons/index"
import useValues from "../hooks/useValues"
import Permit from "../Permit"

type Props = {
  permit: Permit
  horizontalBordered: boolean
}

const Div = styled.div<{ isOpaque?: boolean }>`
  margin-bottom: ${ themeSpacing(8) };
  dl {
    opacity: ${ ({ isOpaque = true }) => isOpaque ? 1 : 0.3 };
  }
`

const HeadingSpan = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
`

const StyledIcon = styled(Icon)`
  margin-left: ${ themeSpacing(2) };
`

const isDateValid = (permit: Permit) => {
  const details = permit?.details
  const endDate = details?.DATE_VALID_TO ?? details?.DATE_VALID_UNTIL
  const startDate = details?.DATE_VALID_FROM
  const now = dayjs() // current date and time
  // If there is a start date and it is in the future, it is not valid.
  if (startDate && dayjs(startDate).isAfter(now)) {
    return false
  }
  // If there is an end date, it cannot be in the past.
  if (endDate && dayjs(endDate).isBefore(now)) {
    return false
  }
  return true
}

const PermitDetail: React.FC<Props> = ({ permit, horizontalBordered }) => {
  const values = useValues(permit)
  const { permit_type, permit_granted } = permit
  const isGranted = permit_granted === "GRANTED"
  const hasValidDate = isDateValid(permit)
  const isValid = isGranted && hasValidDate

  return (
    <Div isOpaque={ isValid }>
      <DefinitionList
        title={
          <HeadingSpan>
            { permit_type }
            <StyledIcon color={ isValid ? "#00a03c" : "#ec0000" } >
              { isValid ? <Check /> : <Close /> }
            </StyledIcon>
          </HeadingSpan>
        }
        headingSize="h4"
        data={ values }
        horizontalBordered={ horizontalBordered }
      />
    </Div>
  )
}

export default PermitDetail
