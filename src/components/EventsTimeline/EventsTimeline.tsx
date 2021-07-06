import React from "react"
import CaseEvent from "./CaseEvent"
import TimelineEvent from "./components/TimelineEvent"
import useGroupedCaseEvents from "./hooks/useGroupedCaseEvents"

export type Props = {
  events: CaseEvent[]
  spacingHorizontal?: number
  useTransparentBackground?: boolean
}

const EventsTimeline: React.FC<Props> = ({ events, spacingHorizontal = 0, useTransparentBackground = false } ) => {
  const items = useGroupedCaseEvents(events)
  return (
    <div>
    { items.map((item, index) => (
        <TimelineEvent
          key={ item.caseEvents[0].id }
          timelineEventItem={ item }
          isOpen={ index === items.length - 1 }
          spacingHorizontal={ spacingHorizontal }
          useTransparentBackground={ useTransparentBackground }
        />
      ))
    }
    </div>
  )
}

export default EventsTimeline