import { personRoleMap } from "./dictionaries"

export type Person = {
  person_full_name: string
  person_role: string
}
export type PersonRole = "PERSON_ROLE_OWNER" | "PERSON_ROLE_RESIDENT" | "PERSON_ROLE_MIDDLEMAN"

const personRole = (role: keyof typeof personRoleMap) => personRoleMap[role]

const DisplayPersonWithRole = (person: Person) => 
  `${ person.person_full_name }, ${ typeof person.person_role === "string" ? personRole( person.person_role as PersonRole ).toLowerCase() : "-" }`

export default DisplayPersonWithRole
