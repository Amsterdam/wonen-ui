import React from "react"
import { PersonRole, personRoleMap } from "../../helpers/dictionaries"


type Props = {
  personRole?: PersonRole | undefined | null
}

const PersonRoleDisplay: React.FC<Props> = ({ personRole }) =>
  <>{ personRole ? `${ (personRoleMap[personRole]).toLowerCase() }` : "" }</>

export default PersonRoleDisplay
