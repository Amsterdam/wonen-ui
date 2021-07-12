import React from "react"
import { personRoleMap } from "./../Helpers/dictionaries"

export type PersonRole = "PERSON_ROLE_OWNER" | "PERSON_ROLE_RESIDENT" | "PERSON_ROLE_MIDDLEMAN"

type Props = {
  personRole?: PersonRole | undefined | null
  addToEndOfString?: boolean
}
  
  const PersonRoleDisplay: React.FC<Props> = ({ personRole, addToEndOfString = false }) => {
    const preFix = addToEndOfString ? ", " : ""
    return <>{ personRole ? `${ preFix }${ (personRoleMap[personRole]).toLowerCase() }` : "" }</>
  }
    
  
  export default PersonRoleDisplay
  