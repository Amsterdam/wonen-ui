import React from "react"
import type CaseEvent from "./CaseEvent"
import Div from "./components/Timeline/EventsTimeline"
import TimelineEvent from "./components/TimelineEvent"
import useGroupedCaseEvents from "./hooks/useGroupedCaseEvents"

export type Props = {
  events: CaseEvent[]
  spacingHorizontal?: number
  hasTransparentBackground?: boolean
  prefixUrl?: string
}

const EventsTimeline: React.FC<Props> = ({
  events, spacingHorizontal = 0, hasTransparentBackground, prefixUrl = ""
}) => {
  const { groupedEvents, groupedTimelineEventTotals } = useGroupedCaseEvents(events)
  return (
    <Div spacingHorizontal={ spacingHorizontal }>
    { groupedEvents.reverse().map((item, index) => (
        <TimelineEvent
          key={ item.caseEvents[0].id }
          timelineEventItem={ item }
          isOpen={ index === 0 }
          hasTransparentBackground={ hasTransparentBackground }
          groupedTimelineEventTotals={ groupedTimelineEventTotals }
          prefixUrl={ prefixUrl }
        />
      ))
    }
    </Div>
  )
}

export default EventsTimeline