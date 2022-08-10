import React from "react"
import styled from "styled-components"
import { themeSpacing, Spinner } from "@amsterdam/asc-ui"
import moment from "moment"
import ResidentsType from "./ResidentsType"
import ResidentsHeader from "./ResidentsHeader"
import ResidentsView from "./ResidentsView"

type Props = {
  data?: ResidentsType
  loading?: boolean
  header?: boolean
}

const Ul = styled.ul`
  margin-top: ${ themeSpacing(8) };
  padding: 0;
  list-style: none;

  li {
    margin-bottom: ${ themeSpacing(14) };
  }
`

const NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE = 1

// Filter residents for deceased persons lon ago.
const getResidents = (data?: ResidentsType) => {
  let residents = data?._embedded?.ingeschrevenpersonen

  if (residents?.length >= 0) {
    residents = residents.filter((resident: any) => {
      const deceased = resident?.overlijden?.datum?.datum
      if (deceased) {
        const deceasedDate = moment(deceased)
        const dateDeceasedPersonIsVisible = moment().subtract(NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE, "years")
        const isDeceasedPersonVisible = deceasedDate.isSameOrAfter(dateDeceasedPersonIsVisible)
        return isDeceasedPersonVisible
      }
      return true
    })
  }
  return residents
}

const Residents: React.FC<Props> = ({ data, loading, header = false }) => {

  const residents = getResidents(data)

  return (
    <>
      { header && <ResidentsHeader residents={ residents } /> }
      <ResidentsView residents={ residents } loading={ loading } />
    </>
  )
}

export default Residents
