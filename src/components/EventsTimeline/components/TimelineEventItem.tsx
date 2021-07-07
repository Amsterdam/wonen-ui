import React from "react"

import type CaseEvent from "../CaseEvent"
import { Field } from "../helpers/fields"
import { variablesToFields, variablesToValues } from "../helpers/variablesMappings"

import Timeline from "./Timeline/Timeline"
import { getDay } from "../../DayDisplay/DayDisplay"
import { displayDate } from "../../DateDisplay/DateDisplay"
import EventData from "./EventData"

type Props = {
  fields: Field[]
  caseEvents: CaseEvent[]
  title?: string
  dateField?: string
  isOpen?: boolean
  hasTransparentBackground?: boolean
  showCount?: boolean
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

  return (
    <Timeline title={ titleWithCounter } isOpen={ isOpen } hasTransparentBackground={ hasTransparentBackground }>
      { caseEvents.map(caseEvent => {

          const variablesFields = variablesToFields(caseEvent.event_values.variables)
          const variablesValues = variablesToValues(caseEvent.event_values.variables)
          const showVariables = variablesFields !== undefined && variablesValues !== undefined

          return (
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
                <EventData fields={ fields } values={ caseEvent.event_values } isNested={ true } />
                { showVariables && <EventData fields={ variablesFields! } values={ variablesValues! } /> }
              </Timeline> :
              <>
                <EventData fields={ fields } values={ caseEvent.event_values } />
                { showVariables && <EventData fields={ variablesFields! } values={ variablesValues! } /> }
              </>
            }
            </div>
          )
        } )
      }
    </Timeline>
  )
}

export default TimelineEventItem
