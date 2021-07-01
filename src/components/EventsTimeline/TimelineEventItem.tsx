import React from "react"
import { getDay }from "../DayDisplay/DayDisplay"

import Timeline from "../Timeline/Timeline"
import type { Field } from "./helpers/fields"
import EventWrapper from "./EventWrapper"
import { displayDate } from "../DateDisplay/DateDisplay"
import { CaseEvent } from "./TimelineEvent"
import Dl from "./Dl"

type Props = {
  fields: Field[]
  caseEvents: CaseEvent[]
  title?: string
  dateField?: string
  pathName?: string
  isOpen?: boolean
  useTransparentBackground?: boolean
  itemCount?: number
}

type ItemType = {
  label: string
  value: string | boolean
  value_verbose: string
}

const TimelineEventItem: React.FC<Props> = ({ fields, caseEvents, title = "", dateField = "date_created", pathName, isOpen = false, useTransparentBackground = false, itemCount = 0 }) => {

  // This situation would be considered a problem within the data returned from the API
  if (caseEvents.length === 0) return null

  const hasPluralEvents = caseEvents.length > 1
  const titleWithCounter = `${ title } ${ itemCount > 1 ? `(${ itemCount })` : "" }`
  const items = Object.values(caseEvents[0]?.event_values.variables ?? {} ) as ItemType[]

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
            <>
              <EventWrapper fields={ fields } caseEvent={ caseEvent } />
              { items.length > 0 &&
                <Dl>
                  { items.map(({ label, value, value_verbose }, index) => { //value_verbose is the humanreadable variant of value
                    if(value === false) return null //hide unchecked checkboxes
                    return (
                      <div key={ `${ label }_${ index }` }>
                        <dt>{ label }</dt>
                        <dd>{ typeof value === "string" && value_verbose }</dd> {/** if value is not a string, it's a boolean. We don't want to show the value of a boolean ("true" or "false") to the user */}
                      </div>
                    )
                  })}
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
