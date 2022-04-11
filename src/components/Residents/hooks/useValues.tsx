import styled from "styled-components"
import moment from "moment"
import pickby from "lodash.pickby"
import DateDisplay from "../../DateDisplay/DateDisplay"

const Bold = styled.span`
  font-weight: 600;
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
  const fromNowString = moment(date).fromNow(true)
  const str = fromNowString.replace(/\b(?:hours|a day|days|a month|months|a year|years)\b/gi, (matched) => timeMapper[matched])
  return str
}

const getFamilyNames = (family: any[]) => {
  const familyNames = family.map((member: any) => `${ member?.naam?.voornamen } ${ member?.naam?.geslachtsnaam }`).join(", ")
  return familyNames || undefined
}

export default (resident: any) => {
  const {
    leeftijd,
    geboorte: {
      datum: {
        datum: geboorteDatum
      }
    },
    verblijfplaats: {
      datumAanvangAdreshouding: {
        datum: ingeschrevenSinds
      }
    },
    naam: {
      voornamen,
      voorletters,
      geslachtsnaam,
      voorvoegsel
    },
    geslachtsaanduiding,
    _embedded: {
      kinderen,
      ouders,
      partners
    }
  } = resident

  const values: any = {
    "Voornamen": voornamen,
    "Initialen": voorletters,
    "Voorvoegsel": voorvoegsel,
    "Achternaam": geslachtsnaam,
    "Geslacht": geslachtsaanduiding,
    "Geboren": (
      <>
        <DateDisplay date={ geboorteDatum } />
        <Bold> ({ leeftijd } jaar)</Bold>
      </>
    ),
    "Ingeschreven sinds": (
      <>
        <DateDisplay date={ ingeschrevenSinds } />
        <Bold> ({ getTimeFromNow(ingeschrevenSinds) })</Bold>
      </>
    ),
    "Kinderen": getFamilyNames(kinderen),
    "Ouders": getFamilyNames(ouders),
    "Partner": getFamilyNames(partners)
  }

  const filteredValues = pickby(values, e => e !== undefined)

  return filteredValues
}
