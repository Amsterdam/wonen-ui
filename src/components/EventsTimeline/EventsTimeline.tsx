import TimelineEvent, { TimelineEventItemType } from "./components/TimelineEvent"

export type Props = {
  items: TimelineEventItemType[]
  spacingHorizontal?: number
  useTransparentBackground?: boolean
}

const TimelineEvents: React.FC<Props> = ({ items, spacingHorizontal = 0, useTransparentBackground = false } ) => (
  <div>
  { items.map((item: TimelineEventItemType, index: number) => (
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

export default TimelineEvents