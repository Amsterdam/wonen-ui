import React from "react"
export type GeslachtsaanduidingEnum = "M" | "V" | "X";

type Props = {
  sex?: GeslachtsaanduidingEnum
  firstName?: string
  namePrefix?: string
  name: string
}

const mapSex = (value?: GeslachtsaanduidingEnum) => {
  switch (value) {
    case "M": return "Dhr. "
    case "V": return "Mvr. "
    default: return ""
  }
}

const PersonNameDisplay: React.FC<Props> = ({ sex, firstName, namePrefix, name }) =>
  <>{ `${ mapSex(sex) }${ firstName ?  `${ firstName } ` : "" } ${ namePrefix ? `${ namePrefix } ` : "" }${ name }` }</>

export default PersonNameDisplay
