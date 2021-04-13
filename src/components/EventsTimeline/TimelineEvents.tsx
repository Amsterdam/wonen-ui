import React from "react"
import TimelineEvent, { TimelineEventItem } from "./TimelineEvent"

export type Props = {
  items: TimelineEventItem[]
  spacingHorizontal?: number
  useTransparentBackground?: boolean
}

const TimelineEvents: React.FC<Props> = ({ items, spacingHorizontal = 0, useTransparentBackground = false } ) => (
  <div>
  { items.map((item, index) => (
    <TimelineEvent
      key={ item.caseEvents[0].id }
      timelineEventItem={ item }
      isOpen={ index === 0 }
      spacingHorizontal={ spacingHorizontal }
      useTransparentBackground={ useTransparentBackground }
    />
  )) }
  </div>
)

export default TimelineEvents