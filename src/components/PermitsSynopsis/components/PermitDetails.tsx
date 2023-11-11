import React from "react"
import styled from "styled-components"
import { themeSpacing, Icon } from "@amsterdam/asc-ui"
import moment from "moment"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import { Check, Close } from "../../Icons/index"
import useValues from "../hooks/useValues"
import Permit from "../PermitType"

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
  const { startdatum, einddatum } = permit
  const now = moment() // current date and time
  // If there is a start date and it is in the future, it is not valid.
  if (startdatum && moment(startdatum).isAfter(now)) {
    return false
  }
  // If there is an end date, it cannot be in the past.
  if (einddatum && moment(einddatum).isBefore(now)) {
    return false
  }
  return true
}

const PermitDetail: React.FC<Props> = ({ permit, horizontalBordered }) => {
  const values = useValues(permit)
  const { product, status, resultaat } = permit
  const hasValidDate = isDateValid(permit)
  // TODO: are these the right properties to define a legit permit?
  const isValid = !!status && !!resultaat && hasValidDate

  return (
    <Div isOpaque={ isValid }>
      <DefinitionList
        title={
          <HeadingSpan>
            { product }
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
