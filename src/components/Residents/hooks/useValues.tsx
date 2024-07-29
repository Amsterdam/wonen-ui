import React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import pickby from "lodash.pickby"
import DateDisplay from "../../DateDisplay/DateDisplay"

// Load the plugin
dayjs.extend(relativeTime)

const Bold = styled.span`
  font-weight: 600;
`

const Italic = styled.span`
  font-style: italic;
`

const timeMapper: { [key: string]: string } = {
  "hours": "uur",
  "a day": "één dag",
  "days": "dagen",
  "a month": "één maand",
  "months": "maanden",
  "a year": "één jaar",
  "years": "jaar"
}

const getTimeFromNow = (date?: string) => {
  if (!date) {
    return ""
  }
  const fromNowString = dayjs(date).fromNow(true)
  const str = fromNowString.replace(/\b(?:hours|a day|days|a month|months|a year|years)\b/gi, (matched) => timeMapper[matched])
  return str
}

const getFamilyNames = (family: any[]) => {
  const familyNames = family.map((member: any) => member?.naam?.geslachtsnaam === "." ? "onbekend" : `${ member?.naam?.voornamen ?? "" } ${ member?.naam?.geslachtsnaam }`).join(", ")
  return familyNames || undefined
}

const useValues = (resident: any) => {
  const {
    leeftijd,
    geboorte: {
      datum: {
        datum: geboorteDatum,
        jaar
      }
    },
    verblijfplaats,
    naam: {
      voornamen,
      voorletters,
      geslachtsnaam,
      voorvoegsel
    },
    geslachtsaanduiding,
    overlijden,
    _embedded: {
      kinderen,
      ouders,
      partners
    }
  } = resident

  const ingeschrevenAdresSinds = verblijfplaats?.datumAanvangAdreshouding?.datum

  const values: any = {
    "Voornamen": voornamen,
    "Initialen": voorletters,
    "Voorvoegsel": voorvoegsel,
    "Achternaam": geslachtsnaam,
    "Geslacht": geslachtsaanduiding,
    "Geboren": geboorteDatum ? (
      <>
        <DateDisplay date={ geboorteDatum } />
        { overlijden ? null : <Bold> ({ leeftijd } jaar)</Bold> }
      </>
    ) : jaar,
    "Overleden †": overlijden?.datum?.datum ? (
      <>
        <DateDisplay date={ overlijden?.datum?.datum } />
        <Bold> ({ getTimeFromNow(overlijden?.datum?.datum) } geleden)</Bold>
      </>
      ) : undefined,
    "Ingeschreven sinds": ingeschrevenAdresSinds ? (
      <>
        <DateDisplay date={ ingeschrevenAdresSinds } />
        <Bold> ({ getTimeFromNow(ingeschrevenAdresSinds) })</Bold>
      </>
    ) : <Italic>Niet beschikbaar</Italic>,
    "Kinderen": getFamilyNames(kinderen),
    "Ouders": getFamilyNames(ouders),
    "Partner": getFamilyNames(partners)
  }

  const filteredValues = pickby(values, e => e !== undefined)

  return filteredValues
}

export default useValues
