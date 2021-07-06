import React from "react"
import TimelineEvent, { TimelineEventItemType } from "./components/TimelineEvent"

export type Props = {
  items: TimelineEventItemType[]
  spacingHorizontal?: number
  useTransparentBackground?: boolean
}

const EventsTimeline: React.FC<Props> = ({ items, spacingHorizontal = 0, useTransparentBackground = false } ) => (
  <div>
  { items.map((item: TimelineEventItemType, index: number) => (
      <TimelineEvent
        key={ item.caseEvents[0].id }
        timelineEventItem={ item }
        isOpen={ index === 0 }
        spacingHorizontal={ spacingHorizontal }
        useTransparentBackground={ useTransparentBackground }
      />
    ))
  }
  </div>
)

export default EventsTimeline