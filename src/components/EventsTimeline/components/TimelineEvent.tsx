import React from "react"

import type { GroupedTimelineEventItem } from "../hooks/useGroupedCaseEvents"
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
  isOpen?: boolean
  hasTransparentBackground?: boolean
  itemCount?: number
}

const TimelineEvent: React.FC<Props> = ({ timelineEventItem: { type, caseEvents }, isOpen = false, hasTransparentBackground }) => (
  <div role="button" tabIndex={ -1 }>
    { type === "CASE" ?
        <TimelineEventItem
          fields={ fields(reasonFields, reasonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "CASE_CLOSE" ?
        <TimelineEventItem
          fields={ fields(caseCloseFields, caseCloseLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "SCHEDULE" ?
        <TimelineEventItem
          fields={ fields(scheduleFields, scheduleLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "VISIT" ?
        <TimelineEventItem
          fields={ fields(visitFields, visitLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="start_time"
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
          showCount={ true }
        /> :
      type === "DEBRIEFING" ?
        <TimelineEventItem
          fields={ fields(debriefingFields, debriefLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
          dateField="date_added"
        /> :
      type === "SUMMON" ?
        <TimelineEventItem
          fields={ fields(summonFields, summonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "DECISION" ?
        <TimelineEventItem
          fields={ fields(decisionFields, decisionLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "CITIZEN_REPORT" ?
        <TimelineEventItem
          fields={ fields(citizenReportFields, citizenReportLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      type === "GENERIC_TASK" ?
        <TimelineEventItem
          fields={ fields(genericTaskFields, genericLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseEvents[0]?.event_values.description }
          dateField="date"
          isOpen={ isOpen }
          hasTransparentBackground={ hasTransparentBackground }
        /> :
      null
    }
  </div>
)

export default TimelineEvent
