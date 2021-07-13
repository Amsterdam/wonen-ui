import { personRoleMap } from "../../Helpers/dictionaries"

export type Person = {
  person_full_name: string
  person_role: PersonRole
}

export type PersonRole = "PERSON_ROLE_OWNER" | "PERSON_ROLE_RESIDENT" | "PERSON_ROLE_MIDDLEMAN"

const personRole = (role: keyof typeof personRoleMap) => personRoleMap[role]

const DisplayPersonWithRole = (person: Person) => 
  // TODO use PersonDisplay (with person_full_name) and PersonRoleDisplay
  `${ person.person_full_name }, ${ typeof person.person_role === "string" ? personRole( person.person_role as PersonRole ).toLowerCase() : "-" }`
  
export default DisplayPersonWithRole
