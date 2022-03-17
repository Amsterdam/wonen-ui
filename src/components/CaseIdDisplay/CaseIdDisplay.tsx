import React from "react"

type Props = {
  id?: string | number
}

const CaseIdDisplay: React.FC<Props> = ({ id }) => <>{ id ?? "-" }</>

export default CaseIdDisplay
