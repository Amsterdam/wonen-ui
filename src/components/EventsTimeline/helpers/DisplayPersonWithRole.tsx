import { PersonRole, personRoleMap } from "../../../helpers/dictionaries"

export type Person = {
  first_name?: string
  preposition?: string
  last_name: string
  person_role?: PersonRole
}

const DisplayPersonWithRole = (person: Person) => {
  const { first_name, last_name, preposition, person_role } = person
  // TODO use PersonNameDisplay and PersonRoleDisplay
  return  `${ first_name ?  `${ first_name } ` : "" } ${ preposition ? `${ preposition } ` : "" }${ last_name }, ${ typeof person_role === "string" ? personRoleMap[person_role].toLowerCase() : "-" }`
}
export default DisplayPersonWithRole
