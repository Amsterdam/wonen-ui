import React from "react"
import { Accordion } from "@amsterdam/asc-ui"
import DefinitionList from "../Data/DefinitionList/DefinitionList"
import dayjs from "dayjs"
import useValues, { formatName } from "./hooks/useValues"

type Props = {
  resident: any
  num: number
}

const getName = (resident: any) => formatName(resident?.naam, { useInitials: true })

const getAge = (resident: any) => {
  const explicit = resident?.leeftijd
  if (explicit) return explicit

  const birth = resident?.geboorte?.datum?.datum
  const death = resident?.overlijden?.datum?.langFormaat

  if (!birth) return undefined

  const birthDate = dayjs(birth)
  if (!birthDate.isValid()) return undefined

  if (death) {
    const deathDate = dayjs(death)
    if (!deathDate.isValid()) return undefined
    return deathDate.diff(birthDate, "years")
  }

  return dayjs().diff(birthDate, "years")
}

const getBirthInfo = (resident: any) => {
  const full = resident?.geboorte?.datum?.datum
  const yearOnly = resident?.geboorte?.datum?.jaar

  if (full) return dayjs(full).format("DD-MM-YYYY")
  if (yearOnly) return String(yearOnly)
  return undefined
}

const Resident: React.FC<Props> = ({ resident, num }) => {
  const values = useValues(resident)

  const name = getName(resident)
  const age = getAge(resident)
  const birthInfo = getBirthInfo(resident)
  const gender = resident?.geslacht?.code || ""

  const titleParts = [
    `${num}.`,
    name,
    birthInfo,
    age ? `(${age})` : "",
    gender,
    resident?.overlijden ? "†" : "",
    resident?.verblijfplaats?.functieAdres?.omschrijving === "briefadres" ? "(Briefadres)" : ""
  ]

  const title = titleParts.filter(Boolean).join(" ")

  return (
    <Accordion title={title} data-testid="accordion">
      <DefinitionList data={values} />
    </Accordion>
  )
}

export default Resident
