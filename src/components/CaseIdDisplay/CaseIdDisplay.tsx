import React from "react"

type Props = {
  id?: string | number
}

  // const idLength = 6
  // id?.toString().padStart(idLength, "0") to create an ID of 6 figures.

const CaseIdDisplay: React.FC<Props> = ({ id }) => <>{ id ?? "-" }</>

export default CaseIdDisplay
