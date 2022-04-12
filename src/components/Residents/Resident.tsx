import React from "react"
import { Accordion } from "@amsterdam/asc-ui"
import DefinitionList from "../Data/DefinitionList/DefinitionList"
import moment from "moment"
import useValues from "./hooks/useValues"

type Props = {
  resident: any
  num: number
}

const getGenderSymbol = (gender: string) => {
  if (gender === "vrouw") return "V"
  if (gender === "man") return "M"
  return gender
}

const Resident: React.FC<Props> = ({ resident, num }) => {
  const values = useValues(resident)

  const dayOfBirth = moment(resident?.geboorte?.datum?.datum).format("DD-MM-YYYY")
  const title = `${ num }. ${ resident?.naam?.aanschrijfwijze } ${ dayOfBirth } (${ resident?.leeftijd })
    ${ getGenderSymbol(resident?.geslachtsaanduiding) } ${ resident?.overlijden ? "†" : "" }`

  return (
    <Accordion title={ title }>
      <DefinitionList data={ values } />
    </Accordion>
  )
}

export default Resident
