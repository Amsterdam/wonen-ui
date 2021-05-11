import React from "react"

import Timeline from "../Timeline/Timeline"
import type { Field } from "./helpers/fields"
import EventWrapper from "./EventWrapper"
import { CaseEvent } from "./TimelineEvent"
import Dl from "./Dl"

type Props = {
  fields: Field[]
  caseEvents: CaseEvent[]
  dateField?: string
  pathName?: string
  isOpen?: boolean
  useTransparentBackground?: boolean
  itemCount?: number
}

type ItemType = {
  label: string
  value: string
}

const GenericTimelineEventItem: React.FC<Props> = ({ fields, caseEvents, isOpen = false, useTransparentBackground = false }) => {

  if (caseEvents.length === 0) return null

  const items = Object.values(caseEvents[0]?.event_values.variables ) as ItemType[]

  return (
    <Timeline title={ caseEvents[0]?.event_values.description } isOpen={ isOpen } useTransparentBackground={ useTransparentBackground }>
      <EventWrapper fields={ fields } caseEvent={ caseEvents[0] } />
      <Dl>
        { items.map(({ label, value }, index) => {
          const mappedValue = value !== "true" && value !== "false" ? value : ""
          return (
            <div key={ `${ label }_${ index }` }>
              <dt>{ label }</dt>
              <dd>{ mappedValue }</dd>
            </div>
          ) 
        })}
      </Dl>
    </Timeline>
  )
}

export default GenericTimelineEventItem
