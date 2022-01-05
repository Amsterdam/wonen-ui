import type CaseEvent from "../CaseEvent"

export type GroupedTimelineEventItem = {
  type: CaseEvent["type"]
  caseEvents: CaseEvent[]
}

export type GroupedTimelineEventTotals = { [key: string]: number }

const shouldBeGrouped = (item: CaseEvent) => item.type !== "GENERIC_TASK"
const equalItems = (i: GroupedTimelineEventItem | undefined, ii: CaseEvent) => i !== undefined && i.type === ii.type

export default (caseEvents: CaseEvent[]) => {

  const groupedEvents = caseEvents.reduce((acc, item) => {
    const last = acc[acc.length - 1]

    // group
    if (shouldBeGrouped(item) && equalItems(last, item)) {
      last.caseEvents.unshift(item)
    }
    // new row
    else {
      acc.push({ type: item.type, caseEvents: [item] })
    }

    return acc
  }, [] as GroupedTimelineEventItem[])


  const groupedTimelineEventTotals: GroupedTimelineEventTotals = {}
  groupedEvents.forEach((x: GroupedTimelineEventItem) => {
    let title = x.type
    if (title === "GENERIC_TASK") {
      title = typeof x.caseEvents[0]?.event_values.description === "string" ? x.caseEvents[0]?.event_values.description : "Generiek event"
    }
    groupedTimelineEventTotals[title] = (groupedTimelineEventTotals[title] || 0) + (x?.caseEvents?.length || 1)
  })

  return { groupedEvents, groupedTimelineEventTotals }
}