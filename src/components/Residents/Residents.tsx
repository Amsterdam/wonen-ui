import React from "react"
import styled from "styled-components"
import { themeSpacing, Spinner } from "@amsterdam/asc-ui"
import ResidentsType from "./ResidentsType"
import Resident from "./Resident"

type Props = {
  data?: ResidentsType
  loading?: boolean
}

const Ul = styled.ul`
  margin-top: ${ themeSpacing(8) };
  padding: 0;
  list-style: none;

  li {
    margin-bottom: ${ themeSpacing(14) };
  }
`

const Residents: React.FC<Props> = ({ data, loading }) => {

  const residents = data?._embedded?.ingeschrevenpersonen

  if (loading) {
    return <Spinner />
  }
  if (!(residents?.length >= 0)) {
    return (
      <Ul>Oeps, er gaat iets mis...</Ul>
    )
  }
  if (residents?.length === 0) {
    return (
      <Ul>Geen ingeschreven personen gevonden</Ul>
    )
  } else {
    return (
      <Ul>
        {residents.map((resident: any, index: number) => (
          <Resident resident={ resident } key={ index } num={ index + 1 } />
          )
        )}
      </Ul>
    )
  }
}

export default Residents
