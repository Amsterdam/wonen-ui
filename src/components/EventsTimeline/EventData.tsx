import { stringWithLinebreaks } from "components/Helpers/Helpers"
import React from "react"
import Dl from "./Dl"
import type { Field } from "./helpers/fields"
import UnstyledList from "./UnstyledList"

type Props = {
  fields: Field[]
  values: Record<string, unknown>
  isNested?: boolean
}

const displayValue = (value: unknown, mapValue: Field["mapValue"]) => {
  if (Array.isArray(value)) return (
    <UnstyledList>
      { value.map(mapValue).map((item, index) =>
        <li key={ `${ JSON.stringify(item) }_${ index }` }>{ item }</li>
      ) }
    </UnstyledList>
  )
  const mappedValue = mapValue(value)

  if (typeof mappedValue === "string"){
    // return <>{ mappedValue.split("\n").reduce((acc, s) => acc.concat(s, <br key={s} />), [] as React.ReactNode[]) }</>
    return stringWithLinebreaks(mappedValue)
  }
  return <>{ mappedValue }</>
}

type ValueProps = { value: React.ReactNode, displayItalic?: boolean }
const Value: React.FC<ValueProps> = ({ value, displayItalic = false }) => displayItalic ? <i>{ value }</i> : <>{ value }</>

const EventData: React.FC<Props> = ({ fields, values, isNested = false }) => (
  <Dl>
    { fields.map(({ key, label, shouldShow, mapValue, italic }, index) => {
        const value = values[key]
        return (
          value != null && shouldShow(value, isNested) ?
          <div key={ `${ key }_${ index }` }>
            <dt>{ label }</dt>
            <dd><Value value={ displayValue(value, mapValue) } displayItalic={ italic } /></dd>
          </div> :
          null
        )
    }) }
  </Dl>
)

export default EventData
