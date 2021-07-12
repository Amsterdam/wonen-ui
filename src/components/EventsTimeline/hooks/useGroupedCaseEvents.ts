import type CaseEvent from "../CaseEvent"

export type GroupedTimelineEventItem = {
  type: CaseEvent["type"]
  caseEvents: CaseEvent[]
}

const shouldBeGrouped = (item: CaseEvent) => item.type !== "GENERIC_TASK"
const equalItems = (i: GroupedTimelineEventItem | undefined, ii: CaseEvent) => i !== undefined && i.type === ii.type

export default (caseEvents: CaseEvent[]) =>
  caseEvents.reduce((acc, item) => {

    const last = acc[acc.length - 1]

    // group
    if (shouldBeGrouped(item) && equalItems(last, item)) {
      last.caseEvents.push(item)
    }
    // new row
    else {
      acc.push({ type: item.type, caseEvents: [item] })
    }

    return acc
  }, [] as GroupedTimelineEventItem[])