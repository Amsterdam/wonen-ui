
// import { capitalizeString } from "../../Helpers/helpers"
// import PersonDisplay from "../../PersonDisplay/PersonDisplay"
// import PersonRoleDisplay, { PersonRole } from "../..//PersonRoleDisplay/PersonRoleDisplay"
import { personRoleMap } from "../../Helpers/dictionaries"
//import { personRoleMap } from "./dictionaries"

export type Person = {
  person_full_name: string
  person_role: PersonRole
}

export type PersonRole = "PERSON_ROLE_OWNER" | "PERSON_ROLE_RESIDENT" | "PERSON_ROLE_MIDDLEMAN"

const personRole = (role: keyof typeof personRoleMap) => personRoleMap[role]

const DisplayPersonWithRole = (person: Person) => 
  `${ person.person_full_name }, ${ typeof person.person_role === "string" ? personRole( person.person_role as PersonRole ).toLowerCase() : "-" }`

  // TODO use PersonDisplay (with person_full_name) and PersonRoleDisplay
// const DisplayPersonWithRole = (person: Person) => {
//   console.log("person", person)

  // return (
  //   <>
  //   <PersonDisplay
  //     name={ capitalizeString(person.person_full_name) }
  //   />
  //   <PersonRoleDisplay personRole= { person.person_role } addToEndOfString />
  // </>

  // )
// }
  
export default DisplayPersonWithRole
