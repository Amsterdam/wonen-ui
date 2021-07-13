import { PersonRole, personRoleMap } from "../../Helpers/dictionaries"

export type Person = {
  person_full_name: string
  person_role: PersonRole
}

const DisplayPersonWithRole = (person: Person) => 
  // TODO use PersonNameDisplay (with person_full_name) and PersonRoleDisplay
  `${ person.person_full_name }, ${ typeof person.person_role === "string" ? personRoleMap[person.person_role].toLowerCase() : "-" }`
  
export default DisplayPersonWithRole
