import React from "react"
import { getDay }from "../DayDisplay/DayDisplay"

import Timeline from "../Timeline/Timeline"
import type { Field } from "./helpers/fields"
import EventWrapper from "./EventWrapper"
import { displayDate } from "../DateDisplay/DateDisplay"

type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "SUMMON" | "GENERIC_TASK"
type Props = {
  fields: Field[]
  caseEvents: {
    readonly id: number
    event_values: {
        [name: string]: any
    }
    readonly date_created: string // date-time
    type: TypeEnum
    emitter_id: number
    case: number
  }[]
  title?: string
  dateField?: string
  pathName?: string
  isOpen?: boolean
}

const TimelineEventItem: React.FC<Props> = ({ fields, caseEvents, title = "", dateField = "date_created", pathName, isOpen = false }) => {

  // This situation would be considered a problem within the data returned from the API
  if (caseEvents.length === 0) return null

  const hasPluralEvents = caseEvents.length > 1
  const titleWithCounter = `${ title } ${ hasPluralEvents ? `(${ caseEvents.length })` : "" }`

  return (
    <Timeline title={ titleWithCounter } isOpen={ isOpen }>
      { caseEvents.map(caseEvent => (
          <div key={ caseEvent.id }>
          { hasPluralEvents ?
            <Timeline
              title={
                caseEvent.event_values[dateField] ?
                  `${ getDay(caseEvent.event_values[dateField], true) } ${ displayDate(caseEvent.event_values[dateField]) }` :
                  `${ title }`
              }
              isOpen={ isOpen }
              largeCircle={ false }
              isNested={ true }
              >
              <EventWrapper fields={ fields } caseEvent={ caseEvent } isNested={ true } />
            </Timeline> :
            <EventWrapper fields={ fields } caseEvent={ caseEvent } />
          }
          </div>
      ) ) }
    </Timeline>
  )
}

export default TimelineEventItem
