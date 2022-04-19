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

const getAge = (resident: any) => {
  if (resident?.leeftijd) {
    return resident?.leeftijd
  }
  if (resident?.geboorte?.datum?.datum) {
    const now = moment()
    const b = moment(resident?.geboorte?.datum?.datum)
    return now.diff(b, "years")
  }
  return undefined
}

const getBirthInfo = (resident: any) => {
  if (resident?.geboorte?.datum?.datum) {
    return moment(resident?.geboorte?.datum?.datum).format("DD-MM-YYYY")
  }
  if (resident?.geboorte?.datum?.jaar) {
    return resident?.geboorte?.datum?.jaar
  }
  return undefined
}

const Resident: React.FC<Props> = ({ resident, num }) => {
  const values = useValues(resident)

  const age = getAge(resident)
  const birthInfo = getBirthInfo(resident)
  const title = `${ num }. ${ resident?.naam?.aanschrijfwijze } ${ birthInfo } ${ age ? `(${ age })` : "" }
    ${ getGenderSymbol(resident?.geslachtsaanduiding) } ${ resident?.overlijden ? "†" : "" }`

  return (
    <Accordion title={ title }>
      <DefinitionList data={ values } />
    </Accordion>
  )
}

export default Resident
