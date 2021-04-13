import React from "react"
import { getDay }from "../DayDisplay/DayDisplay"

import Timeline from "../Timeline/Timeline"
import type { Field } from "./helpers/fields"
import EventWrapper from "./EventWrapper"
import { displayDate } from "../DateDisplay/DateDisplay"
import { CaseEvent } from "./TimelineEvent"

type Props = {
  fields: Field[]
  caseEvents: CaseEvent[]
  title?: string
  dateField?: string
  pathName?: string
  isOpen?: boolean
  useTransparentBackground?: boolean
}

const TimelineEventItem: React.FC<Props> = ({ fields, caseEvents, title = "", dateField = "date_created", pathName, isOpen = false, useTransparentBackground = false }) => {

  // This situation would be considered a problem within the data returned from the API
  if (caseEvents.length === 0) return null

  const hasPluralEvents = caseEvents.length > 1
  const titleWithCounter = `${ title } ${ hasPluralEvents ? `(${ caseEvents.length })` : "" }`

  return (
    <Timeline title={ titleWithCounter } isOpen={ isOpen } useTransparentBackground={ useTransparentBackground }>
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
              useTransparentBackground={ useTransparentBackground }
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
