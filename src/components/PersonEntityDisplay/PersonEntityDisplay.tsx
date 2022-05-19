import React from "react"

type Props = {
  entityName?: string | null
  personFunction?: string | null
}

const PersonEntityDisplay = ({ entityName, personFunction }: Props) => {
  const displayName = [personFunction, entityName].filter(x => !!x)
  return <>{displayName.join(", ")}</>
}

export default PersonEntityDisplay
