import React from "react"

import type CaseEvent from "../CaseEvent"
import type { Field } from "../helpers/fields"

import Timeline from "./Timeline/Timeline"
import EventWrapper from "./EventWrapper"
import Dl from "./Dl"
import { getDay } from "../../DayDisplay/DayDisplay"
import { displayDate } from "../../DateDisplay/DateDisplay"

type Props = {
  fields: Field[]
  caseEvents: CaseEvent[]
  title?: string
  dateField?: string
  isOpen?: boolean
  hasTransparentBackground?: boolean
  showCount?: boolean
}

type ItemType = {
  label: string
  value: string | boolean
}

const TimelineEventItem: React.FC<Props> = ({
  fields,
  caseEvents,
  title = "",
  dateField = "date_created",
  isOpen = false,
  hasTransparentBackground = false,
  showCount = false
}) => {

  if (caseEvents.length === 0) return null

  const hasPluralEvents = caseEvents.length > 1
  const titleWithCounter = `${ title } ${ showCount ? `(${ caseEvents.length })` : "" }`
  const items = Object.values(caseEvents[0]?.event_values.variables ?? {}) as ItemType[]

  return (
    <Timeline title={ titleWithCounter } isOpen={ isOpen } hasTransparentBackground={ hasTransparentBackground }>
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
              hasTransparentBackground={ hasTransparentBackground }
              largeCircle={ false }
              isNested={ true }
              >
              <EventWrapper fields={ fields } caseEvent={ caseEvent } isNested={ true } />
            </Timeline> :
            <>
              <EventWrapper fields={ fields } caseEvent={ caseEvent } />
              { items.length > 0 &&
                <Dl>
                  { items.map(({ label, value }, index) =>
                    <div key={ `${ label }_${ index }` }>
                      <dt>{ label }</dt>
                      <dd>{ typeof value === "string" ?
                        value :
                        value === true ?  "Ja" :
                        value === false ? "Nee" :
                        "-"}
                      </dd>
                    </div>
                  )}
                </Dl>
              }
            </>
          }
        </div>
      ))}
    </Timeline>
  )
}

export default TimelineEventItem
