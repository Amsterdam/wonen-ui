import React from "react"
import TimelineEvent, { TimelineEventItem, TypeEnum } from "./TimelineEvent"

export type Props = {
  items: TimelineEventItem[]
  spacingHorizontal?: number
  useTransparentBackground?: boolean
  countItemType?: TypeEnum
}

const TimelineEvents: React.FC<Props> = ({ items, spacingHorizontal = 0, useTransparentBackground = false, countItemType } ) => {
  let numTotal = 0

  return (

    <div>
    { items.reverse().map((item, index) => {

      if(item.type === countItemType ){
        numTotal += item.caseEvents.length
      }

      return (
        <TimelineEvent
          key={ item.caseEvents[0].id }
          timelineEventItem={ item }
          isOpen={ index === items.length - 1 }
          spacingHorizontal={ spacingHorizontal }
          useTransparentBackground={ useTransparentBackground }
          itemCount={ numTotal }
        />
      ) }
    ).reverse() }
    </div>
  )

}


export default TimelineEvents