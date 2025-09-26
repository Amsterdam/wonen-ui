import React from "react"
import { Accordion } from "@amsterdam/asc-ui"
import DefinitionList from "../Data/DefinitionList/DefinitionList"
import dayjs from "dayjs"
import useValues from "./hooks/useValues"

type Props = {
  resident: any
  num: number
}

const getName = (resident: any) => (
  `${ resident?.naam?.voorletters } ${ resident?.naam?.geslachtsnaam }`
)

const getGenderSymbol = (gender: string) => {
  if (gender === "vrouw") return "V"
  if (gender === "man") return "M"
  return ""
}

const getAge = (resident: any) => {
  if (resident?.leeftijd) {
    return resident?.leeftijd
  }
  if (resident?.overlijden) {
    // if person died and dates are known.
    if (resident?.overlijden?.datum?.langFormaat && resident?.geboorte?.datum?.langFormaat) {
      const born = dayjs(resident?.geboorte?.datum?.datum)
      const died = dayjs(resident?.overlijden?.datum?.langFormaat)
      return died.diff(born, "years")
    }
    // Person died but dates are onknown
    return undefined
  }
  if (resident?.geboorte?.datum?.datum) {
    const now = dayjs()
    const b = dayjs(resident?.geboorte?.datum?.datum)
    return now.diff(b, "years")
  }
  return undefined
}

const getBirthInfo = (resident: any) => {
  if (resident?.geboorte?.datum?.datum) {
    return dayjs(resident?.geboorte?.datum?.datum).format("DD-MM-YYYY")
  }
  if (resident?.geboorte?.datum?.jaar) {
    return resident?.geboorte?.datum?.jaar
  }
  return undefined
}

const Resident: React.FC<Props> = ({ resident, num }) => {
  const values = useValues(resident)

  const name = getName(resident)
  const age = getAge(resident)
  const birthInfo = getBirthInfo(resident)
  const title = `${ num }. ${ name } ${ birthInfo } ${ age ? `(${ age })` : "" }
    ${ resident?.geslacht?.code } ${ resident?.overlijden ? "†" : "" }`

  return (
    <Accordion title={ title } data-testid="accordion">
      <DefinitionList data={ values } />
    </Accordion>
  )
}

export default Resident
