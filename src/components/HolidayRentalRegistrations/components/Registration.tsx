import React from "react"
import DefinitionList from "../../Data/DefinitionList/DefinitionList"
import ExpandableContainer from "../../Data/ExpandableContainer/ExpandableContainer"
import useValues from "./hooks/useValues"
import type { HolidayRentalRegistration } from "../types"

type Props = {
  registration: HolidayRentalRegistration
  horizontalBordered?: boolean
  defaultOpen?: boolean
}

const Registration: React.FC<Props> = ({ registration, horizontalBordered, defaultOpen }) => {
  const values = useValues(registration)

  return (
    <ExpandableContainer 
      title={`Registratie (${ registration.registrationNumber })`}  
      defaultOpen={defaultOpen}
    >
      <DefinitionList
        data={values}
        horizontalBordered={horizontalBordered}
      />
    </ExpandableContainer>
  )
}

export default Registration