import React from "react"
import TimelineEvent, { TimelineEventItem } from "./TimelineEvent"

type Props = {
  items: TimelineEventItem[]
}

const TimelineEvents: React.FC<Props> = ({ items }) => (
  <>
  { items.map((item, index) => (
    <TimelineEvent
      key={ item.caseEvents[0].id }
      timelineEventItem={ item }
      isOpen={ index === 0 }
    />
  )) }
  </>
)

export default TimelineEvents