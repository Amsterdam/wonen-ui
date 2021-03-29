import React from "react"
import Header from "../Header/Header"

type Props = {
    caseId?: number
}

const TimeLine: React.FC<Props> = ({ caseId }) => (
  <Header caseId={caseId} />
)

export default TimeLine
