import React from "react"
import styled from "styled-components"
import DefinitionList  from "../../Data/DefinitionList/DefinitionList"
import useValues from "./hooks/useValues"
import type { HolidayRentalRegistration } from "../types"

type Props = {
  registration: HolidayRentalRegistration
  horizontalBordered?: boolean
}

const StyledDiv = styled.div`
  margin-top: 12px;
`

const Registration: React.FC<Props> = ({ registration, horizontalBordered }) => {
  const values = useValues(registration) 
  return (
    <StyledDiv>
      <DefinitionList 
        title="Registratie"
        data={ values }
        horizontalBordered={ horizontalBordered }
        headingSize="h4"
      /> 
    </StyledDiv>    
  )
}

export default Registration