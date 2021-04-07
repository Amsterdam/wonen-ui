import React from "react"
import TimelineEvent, { TimelineEventItem } from "./TimelineEvent"

export type Props = {
  items: TimelineEventItem[]
  spacingHorizontal?: number
}

const TimelineEvents: React.FC<Props> = ({ items, spacingHorizontal = 0 }) => (
  <>
  { items.map((item, index) => (
    <TimelineEvent
      key={ item.caseEvents[0].id }
      timelineEventItem={ item }
      isOpen={ index === 0 }
      spacingHorizontal={ spacingHorizontal }
    />
  )) }
  </>
)

export default TimelineEvents