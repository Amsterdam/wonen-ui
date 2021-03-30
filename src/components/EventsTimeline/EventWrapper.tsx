import React from "react"
import type { Field } from "./helpers/fields"
import EventData from "./EventData"
import { CaseEvent } from "./TimelineEvent"

type Props = {
  fields: Field[]
  caseEvent: CaseEvent
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
