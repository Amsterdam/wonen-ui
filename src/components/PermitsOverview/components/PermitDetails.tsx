import React from "react"
import styled from "styled-components"
import { themeSpacing, Icon } from "@amsterdam/asc-ui"
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

const PermitDetail: React.FC<Props> = ({ permit, horizontalBordered }) => {
  const values = useValues(permit)
  const { permit_type, permit_granted } = permit
  const isGranted = permit_granted === "GRANTED"

  return (
    <Div isOpaque={ isGranted }>
      <DefinitionList
        title={
          <HeadingSpan>
            { permit_type }
            <StyledIcon color={isGranted ? "#00a03c" : "#ec0000"} >
              { isGranted ? <Check /> : <Close /> }
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
