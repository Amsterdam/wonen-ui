import React from "react"
import { Heading } from "@amsterdam/asc-ui"

type Props = {
  residents?: any
}

const ResidentsHeader: React.FC<Props> = ({ residents }) => {
  const actualTotalResidents = residents?.filter((resident: any) => !resident?.overlijden?.datum?.datum)?.length
  const text = actualTotalResidents >= 0 ? `(${ actualTotalResidents })` : ""

  return (
    <Heading as="h2" data-testid="header">Actueel ingeschreven personen { text }</Heading>
  )
}

export default ResidentsHeader
