import React from "react"
import ReactDOMServer from "react-dom/server"
import PersonRoleDisplay from "../../../components/PersonRoleDisplay/PersonRoleDisplay"
import PersonNameDisplay from "../../../components/PersonNameDisplay/PersonNameDisplay"
import PersonEntityDisplay from "../../../components/PersonEntityDisplay/PersonEntityDisplay"
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
  const { first_name, last_name, preposition, person_role, entity_name, function: person_function } = person
  // TODO: convert this component and child components to helper functions that return a string
  // OR make timeline events able to render JSX.
  return ReactDOMServer.renderToString(
    <>
      { last_name && <PersonNameDisplay firstName={first_name} namePrefix={preposition} name={last_name} /> }
      { last_name && (person_function || entity_name) && <span>, </span> }
      <PersonEntityDisplay personFunction={person_function} entityName={entity_name} />
      { person_role && <>
        <span> (</span>
          <PersonRoleDisplay personRole={person_role} />
        <span>)</span>
      </> }
    </>
  )
}
export default DisplayPersonWithRole
