import React from "react"

import type { GroupedTimelineEventItem, GroupedTimelineEventTotals } from "../hooks/useGroupedCaseEvents"
import TimelineEventItem from "./TimelineEventItem"
import {
  caseTypesMap,
  scheduleLabelsMap,
  debriefLabelsMap,
  genericLabelsMap,
  reasonLabelsMap,
  summonLabelsMap,
  visitLabelsMap,
  decisionLabelsMap,
  citizenReportLabelsMap,
  caseCloseLabelsMap
} from "../helpers/dictionaries"
import fields from "../helpers/fields"
import reasonFields from "../events/reasonFields"
import caseCloseFields from "../events/caseCloseFields"
import scheduleFields from "../events/scheduleFields"
import genericTaskFields from "../events/genericTaskFields"
import summonFields from "../events/summonFields"
import debriefingFields from "../events/debriefingFields"
import visitFields from "../events/visitFields"
import decisionFields from "../events/decisionFields"
import citizenReportFields from "../events/citizenReportFields"

type Props = {
  timelineEventItem: GroupedTimelineEventItem
  groupedTimelineEventTotals: GroupedTimelineEventTotals
  isOpen?: boolean
  hasTransparentBackground?: boolean
  itemCount?: number
}

const TimelineEvent: React.FC<Props> = ({
  timelineEventItem: { type, caseEvents }, groupedTimelineEventTotals, isOpen = false, hasTransparentBackground
}) => {
  const props = {
    caseEvents,
    type,
    groupedTimelineEventTotals,
    isOpen,
    hasTransparentBackground
  }

  const getTimelineEventItem = () => {
    switch (type) {
      case "CASE":
        return (
          <TimelineEventItem
            fields={ fields(reasonFields, reasonLabelsMap) }
            title={ caseTypesMap[type] }
            { ...props }
          />
        )
      case "CASE_CLOSE":
        return (
          <TimelineEventItem
            fields={ fields(caseCloseFields, caseCloseLabelsMap) }
            title={ caseTypesMap[type] }
            { ...props }
          />
        )
      case "SCHEDULE":
        return (
          <TimelineEventItem
            fields={ fields(scheduleFields, scheduleLabelsMap) }
            title={ caseTypesMap[type] }
            { ...props }
          />
        )
      case "VISIT":
        return (
          <TimelineEventItem
            fields={ fields(visitFields, visitLabelsMap) }
            title={ caseTypesMap[type] }
            dateField="start_time"
            { ...props }
          />
        )
      case "DEBRIEFING":
        return (
          <TimelineEventItem
            fields={ fields(debriefingFields, debriefLabelsMap) }
            title={ caseTypesMap[type] }
            { ...props }
            dateField="date_added"
          />
        )
      case "SUMMON":
        return (
          <TimelineEventItem
            fields={ fields(summonFields, summonLabelsMap) }
            title={ caseTypesMap[type] }
            dateField="date_added"
            { ...props }
          />
        )
      case "DECISION":
        return (
          <TimelineEventItem
            fields={ fields(decisionFields, decisionLabelsMap) }
            title={ caseTypesMap[type] }
            dateField="date_added"
            { ...props }
          />
        )
      case "CITIZEN_REPORT":
        return (
          <TimelineEventItem
            fields={ fields(citizenReportFields, citizenReportLabelsMap) }
            title={ caseTypesMap[type] }
            dateField="date_added"
            { ...props }
          />
        )
      case "GENERIC_TASK":
        return (
          <TimelineEventItem
            fields={ fields(genericTaskFields, genericLabelsMap) }
            title={ typeof caseEvents[0]?.event_values.description === "string" ? caseEvents[0]?.event_values.description : "Generiek event" }
            dateField="date"
            { ...props }
          />
        )
      default:
        return null
    }
  }

  const timeLineEventItem = getTimelineEventItem()

  return (
    <div role="button" tabIndex={ -1 }>
      {timeLineEventItem}
    </div>
  )
}

export default TimelineEvent
