import React from "react"
import styled from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"

import TimelineEventItem from "./TimelineEventItem"
import { scheduleLabelsMap, debriefLabelsMap, genericLabelsMap, reasonLabelsMap, summonLabelsMap, visitLabelsMap, decisionLabelsMap } from "./helpers/dictionaries"
import fields from "./helpers/fields"
import reasonFields from "./events/reasonFields"
import scheduleFields from "./events/scheduleFields"
import genericTaskFields from "./events/genericTaskFields"
import summonFields from "./events/summonFields"
import debriefingFields from "./events/debriefingFields"
import visitFields from "./events/visitFields"
import decisionFields from "./events/decisionFields"
import { caseTypesMap } from "./helpers/dictionaries"
import GenericTimelineEventItem from "./GenericTimelineEventItem"

export type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "SUMMON" | "GENERIC_TASK" | "SCHEDULE" | "DECISION"
export type CaseEvent = {
  readonly id: number
  event_values: {
      [name: string]: any
  }
  readonly date_created: string // date-time
  type: TypeEnum
  emitter_id: number
  case: number
}
export type TimelineEventItemType = {
  type: string
  caseEvents:
    CaseEvent[]
}

type Props = {
  timelineEventItem: TimelineEventItemType
  isOpen?: boolean
  spacingHorizontal?: number
  useTransparentBackground?: boolean
  itemCount?: number
}

type StylingProps = {
  spacingHorizontal: number
}

const Div = styled.div<StylingProps>`
  position: relative;
  margin: 0 ${ ( { spacingHorizontal = 0 } ) => themeSpacing( -spacingHorizontal ) } ${ themeSpacing(5) };
  padding: 0 ${ ( { spacingHorizontal = 0 } ) => themeSpacing( spacingHorizontal ) };

  //hide the vertical line in the last item
  &:last-child {
    > div:last-child {
      > div:first-child {
        &:after {
          display: none;
        }
      }
    }
  }

  button {
    outline: none;
  }
`

const TimelineEvent: React.FC<Props> = ({ timelineEventItem: { type, caseEvents }, isOpen = false, spacingHorizontal = 0, useTransparentBackground = false, itemCount }) => (
  <Div role="button" tabIndex={ -1 } spacingHorizontal={ spacingHorizontal } >
    { type === "CASE" ?
        <TimelineEventItem
          fields={ fields(reasonFields, reasonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      type === "SCHEDULE" ?
        <TimelineEventItem
          fields={ fields(scheduleFields, scheduleLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      type === "VISIT" ?
        <TimelineEventItem
          fields={ fields(visitFields, visitLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="start_time"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
          itemCount={ itemCount }
        /> :
      type === "DEBRIEFING" ?
        <TimelineEventItem
          fields={ fields(debriefingFields, debriefLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
          dateField="date_added"
          pathName="debriefing"
        /> :
      type === "SUMMON" ?
        <TimelineEventItem
          fields={ fields(summonFields, summonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
        type === "DECISION" ?
        <TimelineEventItem
          fields={ fields(decisionFields, decisionLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      type === "GENERIC_TASK" && Object.keys(caseEvents[0]?.event_values.variables ?? {} ).length === 0 ?
        <TimelineEventItem
          fields={ fields(genericTaskFields, genericLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseEvents[0]?.event_values.description }
          dateField="date"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
        type === "GENERIC_TASK" && Object.keys(caseEvents[0]?.event_values.variables ?? {} ).length > 0 ? 
        <GenericTimelineEventItem
          fields={ fields(genericTaskFields, genericLabelsMap) }
          caseEvents={ caseEvents }
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        />
        :
      null
    }
  </Div>
)

export default TimelineEvent
