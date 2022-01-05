import React from "react"

import type CaseEvent from "../CaseEvent"
import { Field } from "../helpers/fields"
import { variablesToFields, variablesToValues } from "../helpers/variablesMappings"
import type { GroupedTimelineEventItem, GroupedTimelineEventTotals } from "../hooks/useGroupedCaseEvents"

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
  groupedTimelineEventTotals: GroupedTimelineEventTotals
  type: GroupedTimelineEventItem["type"]
}

const TimelineEventItem: React.FC<Props> = ({
  fields,
  caseEvents,
  title = "",
  dateField = "date_created",
  isOpen = false,
  hasTransparentBackground = false,
  groupedTimelineEventTotals,
  type
}) => {

  if (caseEvents.length === 0) return null

  const hasPluralEvents = caseEvents.length > 1
  let titleType = type
  if (type === "GENERIC_TASK") {
    titleType = typeof caseEvents[0]?.event_values.description === "string" ? caseEvents[0]?.event_values.description : "Generiek event"
  }
  const eventsTotal = groupedTimelineEventTotals[titleType]
  const eventsCount = `(${ caseEvents.length }/${ eventsTotal })`
  const titleExtended = `${ title }${ hasPluralEvents ? "en" : "" } ${ eventsTotal === 1 ? "" : eventsCount }`

  return (
    <Timeline title={ titleExtended } isOpen={ isOpen } hasTransparentBackground={ hasTransparentBackground }>
      { caseEvents.map(caseEvent => {

          const variablesFields = variablesToFields(caseEvent.event_variables)
          const variablesValues = variablesToValues(caseEvent.event_variables)
          const showVariables = variablesFields !== undefined && variablesValues !== undefined
          const date = caseEvent.event_values[dateField]
          const titleDisplay = typeof date === "string" ? `${ getDay(date, true) } ${ displayDate(date) }` : title

          return (
            <div key={ caseEvent.id }>
            { hasPluralEvents ? (
                <Timeline
                  title={ titleDisplay }
                  isOpen={ isOpen }
                  hasTransparentBackground={ hasTransparentBackground }
                  largeCircle={ false }
                  isNested={ true }
                >
                  <EventData fields={ fields } values={ caseEvent.event_values } isNested={ true } />
                  { showVariables && <EventData fields={ variablesFields! } values={ variablesValues! } /> }
                </Timeline>
              ) : (
                <>
                  <EventData fields={ fields } values={ caseEvent.event_values } />
                  { showVariables && <EventData fields={ variablesFields! } values={ variablesValues! } /> }
                </>
              )
            }
            </div>
          )
        })
      }
    </Timeline>
  )
}

export default TimelineEventItem
