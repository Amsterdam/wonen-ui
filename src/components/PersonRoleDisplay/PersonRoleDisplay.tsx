import React from "react"
import { PersonRole, personRoleMap } from "../../helpers/dictionaries"


type Props = {
  personRole?: PersonRole | undefined | null
  addToEndOfString?: boolean
}
  
const PersonRoleDisplay: React.FC<Props> = ({ personRole, addToEndOfString = false }) => {
  const preFix = addToEndOfString ? ", " : ""
  return <>{ personRole ? `${ preFix }${ (personRoleMap[personRole]).toLowerCase() }` : "" }</>
}

export default PersonRoleDisplay
