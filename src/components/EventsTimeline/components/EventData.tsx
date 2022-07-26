import React from "react"
import TextWithLinebreaks from "../../TextWithLinebreaks/TextWithLinebreaks"
import TextWithURLs from "../../TextWithURLs/TextWithURLs"
import type { Field } from "../helpers/fields"
import UnstyledList from "./UnstyledList"
import FinancialDisplay from "../../FinancialDisplay/FinancialDisplay"
import Value from "./Value"
import DefinitionList from "../../../components/Data/DefinitionList/DefinitionList"

type Props = {
  fields: Field[]
  values: Record<string, unknown>
  isNested?: boolean
}

const displayValue = (value: unknown, mapValue: Field["mapValue"], isCurrency = false) => {
  if (Array.isArray(value)) return (
    value.length > 0 ?
    <UnstyledList>
      { value.map(mapValue).map((item, index) =>
        <li key={ `${ JSON.stringify(item) }_${ index }` }><TextWithLinebreaks><TextWithURLs text={ item }/></TextWithLinebreaks></li>
      ) }
    </UnstyledList> :
    "-"
  )

  const mappedValue = mapValue(value)

  if (mappedValue === undefined) return null

  if (typeof mappedValue === "string") {
    return <TextWithLinebreaks><TextWithURLs text={ mappedValue }/></TextWithLinebreaks>
  }

  if (isCurrency && typeof value === "number") {
    return <FinancialDisplay amount={ value } />
  }

  if (typeof mappedValue === "boolean") {
    return <>{ mappedValue === true ? "Ja" : "Nee" }</>
  }

  return <>{ mappedValue }</>
}

const EventData: React.FC<Props> = ({ fields, values, isNested = false }) => {

  const displayValues =  fields.reduce((acc, { key, label, shouldShow, mapValue, italic, isCurrency }) => {
    const value = values[key]
    /**
     * don't show label and value when
     * - value == null
     * - fn shouldshow returns false
     * - value is an array and this array is empty,
     */

    if (value == null || (Array.isArray(value) && value.length === 0) || !shouldShow(value, isNested)) return acc

    acc[ label ] = <Value value={ displayValue(value, mapValue, isCurrency) } displayItalic={ italic }/>

    return acc

  }, {} as Record<string, React.ReactNode>)

  return <DefinitionList data={ displayValues } horizontalBordered={ false } />

}

export default EventData
