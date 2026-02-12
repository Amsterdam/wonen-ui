import React from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import pickby from "lodash.pickby"
import DateDisplay from "../../DateDisplay/DateDisplay"

dayjs.extend(relativeTime)

const Bold = styled.span`
  font-weight: 600;
`

const timeMapper: Record<string, string> = {
  hours: "uur",
  "a day": "één dag",
  days: "dagen",
  "a month": "één maand",
  months: "maanden",
  "a year": "één jaar",
  years: "jaar"
}

const getTimeFromNow = (date?: string) => {
  if (!date) return ""
  const fromNow = dayjs(date).fromNow(true)
  return fromNow.replace(
    /\b(?:hours|a day|days|a month|months|a year|years)\b/gi,
    m => timeMapper[m]
  )
}

export const formatName = (naam: any, opts: { useInitials?: boolean } = {}) => {
  if (!naam || Object.keys(naam).length === 0) return "onbekend"

  const first = opts.useInitials ? naam.voorletters : naam.voornamen
  const prefix = naam.voorvoegsel
  const last = naam.geslachtsnaam

  if (!last || last === ".") return "onbekend"

  return [first, prefix, last].filter(Boolean).join(" ")
}

const getFamilyNames = (family: any[]) => {
  if (!Array.isArray(family) || family.length === 0) return undefined

  const names = family
    .map(m => formatName(m?.naam, { useInitials: true }))
    .join(", ")

  return names || undefined
}

const getPartners = (partners?: any[]) => {
  if (!Array.isArray(partners) || partners.length === 0) return undefined

  const names = partners
    .map(partner => {
      const name = formatName(partner?.naam, { useInitials: true })
      if (!name) return null

      const verbintenis = partner?.soortVerbintenis?.omschrijving
      const isEx = Boolean(
        partner?.ontbindingHuwelijkPartnerschap?.datum?.datum
      )

      let result = name

      if (verbintenis) {
        result += ` - ${verbintenis}`
      }

      if (isEx) {
        result +=  " (beëindigd)"
      }

      return result
    })
    .filter(Boolean)
    .join(", ")

  return names || undefined
}


const capitalizeFirstLetter = (str?: string) => {
  if (!str) return undefined
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const useValues = (resident: any) => {
  const geboorteDatum = resident?.geboorte?.datum?.datum
  const overlijdenDatum = resident?.overlijden?.datum?.langFormaat

  const values: Record<string, any> = {
    Voornamen: resident?.naam?.voornamen,
    Initialen: resident?.naam?.voorletters,
    Voorvoegsel: resident?.naam?.voorvoegsel || undefined,
    Achternaam: resident?.naam?.geslachtsnaam,
    Geslacht: resident?.geslacht?.omschrijving,
    Geboren: geboorteDatum ? (
      <>
        <DateDisplay date={geboorteDatum} />
        {!resident?.overlijden && (
          <Bold> ({resident?.leeftijd} jaar)</Bold>
        )}
      </>
    ) : (
      resident?.leeftijd
    ),
    "Overleden †": overlijdenDatum ? (
      <>
        {capitalizeFirstLetter(overlijdenDatum)}
        <Bold> ({getTimeFromNow(overlijdenDatum)} geleden)</Bold>
      </>
    ) : undefined,
    "Ingeschreven sinds": (
      <>
        <DateDisplay date={resident?.verblijfplaats?.datumVan?.datum} />
        <Bold> ({getTimeFromNow(resident?.verblijfplaats?.datumVan?.datum)})</Bold>
      </>
    ),
    Kinderen: getFamilyNames(resident?.kinderen),
    Ouders: getFamilyNames(resident?.ouders),
    Partner: getPartners(resident?.partners)
  }

  return pickby(values, v => v !== undefined)
}

export default useValues
