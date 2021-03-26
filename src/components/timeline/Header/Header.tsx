import React from "react"

type Props = {
    caseId?: number
}

const Header: React.FC<Props> = ({ caseId }) => (
  <div>Dit is zaak: { caseId ?? "onbekend" }.</div>
)

export default Header
