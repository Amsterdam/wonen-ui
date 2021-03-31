import React from "react"

type Props = {
  id?: string | number
}

const CaseIdDisplay: React.FC<Props> = ({ id }) => {
  const idLength = 6
  return <>{ id?.toString().padStart(idLength, "0") ?? "-" }</>
}

export default CaseIdDisplay
