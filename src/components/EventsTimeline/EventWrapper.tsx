import React from "react"
import type { Field } from "./helpers/fields"
import EventData from "./EventData"

type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "SUMMON" | "GENERIC_TASK"

type Props = {
  fields: Field[]
  caseEvent: {
    readonly id: number
    event_values: {
        [name: string]: any
    }
    readonly date_created: string // date-time
    type: TypeEnum
    emitter_id: number
    case: number
  }
  isNested?: boolean
}

const EventWrapper: React.FC<Props> = ({ fields, caseEvent: { event_values }, isNested }) => (
  <EventData
    fields={ fields }
    values={ event_values }
    isNested={ isNested }
  />
)

export default EventWrapper
