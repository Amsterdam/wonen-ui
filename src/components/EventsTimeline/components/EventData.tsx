import React from "react"
import TextWithLinebreaks from "../../TextWithLinebreaks/TextWithLinebreaks"
import TextWithURLs from "../../TextWithURLs/TextWithURLs"
import Dl from "./Dl"
import type { Field } from "../helpers/fields"
import UnstyledList from "./UnstyledList"
import FinancialDisplay from "../../FinancialDisplay/FinancialDisplay"
import Value from "./Value"

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

const EventData: React.FC<Props> = ({ fields, values, isNested = false }) => (
  <Dl>
    { fields.map(({ key, label, shouldShow, mapValue, italic, isCurrency }, index) => {
        const value = values[key]
        return (
          value != null && shouldShow(value, isNested) ?
          <div key={ `${ key }_${ index }` }>
            <dt>{ label }</dt>
            <dd><Value value={ displayValue(value, mapValue, isCurrency) } displayItalic={ italic }/></dd>
          </div> :
          null
        )
    }) }
  </Dl>
)

export default EventData
