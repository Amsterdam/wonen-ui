import React from "react"
import styled from "styled-components"
import { themeSpacing, Icon } from "@amsterdam/asc-ui"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import { Check, Close } from "../../Icons/index"
import useValues from "../hooks/useValues"
import Permit from "../PermitType"
import { isValidPermit } from "../utils"

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

const PermitDetail: React.FC<Props> = ({ permit, horizontalBordered }) => {
  const values = useValues(permit)
  const isValid = isValidPermit(permit)

  return (
    <Div isOpaque={ isValid }>
      <DefinitionList
        title={
          <HeadingSpan>
            { permit.product }
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
