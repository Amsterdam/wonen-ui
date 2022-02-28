import PersonRoleDisplay from "../../../components/PersonRoleDisplay/PersonRoleDisplay"
import PersonNameDisplay from "../../../components/PersonNameDisplay/PersonNameDisplay"
import PersonEntityDisplay from "../../../components/PersonEntityDisplay/PersonEntityDisplay
import { PersonRole } from "../../../helpers/dictionaries"

export type Person = {
  first_name?: string
  preposition?: string
  last_name?: string
  entity_name?: string
  function?: string
  person_role?: PersonRole
}

const DisplayPersonWithRole = (person: Person) => {
  const { first_name, last_name, preposition, person_role, entity_name, function: personFunction } = person
  return (<>
    <PersonNameDisplay firstName={first_name} namePrefix={preposition} name={last_name} />,
    <PersonEntityDisplay personFunction={personFunction} entityName={entity_name} />,
    <PersonRoleDisplay personRole={person_role} />
  </>)
}
export default DisplayPersonWithRole
