import React from "react"
import styled from "styled-components"
import { themeSpacing } from "@amsterdam/asc-ui"

import TimelineEventItemComponent from "./TimelineEventItem"
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
export type TimelineEventItem = {
  type: string
  caseEvents:
    CaseEvent[]
}

type Props = {
  timelineEventItem: TimelineEventItem
  isOpen?: boolean
  spacingHorizontal: number
}

type StylingProps = {
  spacingHorizontal: number
}

const Div = styled.div<StylingProps>`
  position: relative;
  margin-top: 0;
  margin-bottom: ${ themeSpacing(5) };
  margin-left: ${ ( { spacingHorizontal = 0 } ) => themeSpacing( -spacingHorizontal ) };
  margin-right: ${ ( { spacingHorizontal = 0 } ) => themeSpacing( -spacingHorizontal ) };
  padding: 0 ${ ( { spacingHorizontal = 0 } ) => themeSpacing( spacingHorizontal ) };

  &:last-child {
    > div:nth-child(2) {
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

const TimelineEvent: React.FC<Props> = ({ timelineEventItem: { type, caseEvents }, isOpen = false, spacingHorizontal = 0 }) => (
  <Div role="button" tabIndex={ -1 } spacingHorizontal={ spacingHorizontal } >
    { type === "CASE" ?
        <TimelineEventItemComponent
          fields={ fields(reasonFields, reasonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
        /> :
      type === "SCHEDULE" ?
        <TimelineEventItemComponent
          fields={ fields(scheduleFields, scheduleLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
        /> :
      type === "VISIT" ?
        <TimelineEventItemComponent
          fields={ fields(visitFields, visitLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="start_time"
          isOpen={ isOpen }
        /> :
      type === "DEBRIEFING" ?
        <TimelineEventItemComponent
          fields={ fields(debriefingFields, debriefLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          dateField="date_added"
          pathName="debriefing"
        /> :
      type === "SUMMON" ?
        <TimelineEventItemComponent
          fields={ fields(summonFields, summonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
        /> :
        type === "DECISION" ?
        <TimelineEventItemComponent
          fields={ fields(decisionFields, decisionLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
        /> :
      type === "GENERIC_TASK" ?
        <TimelineEventItemComponent
          fields={ fields(genericTaskFields, genericLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseEvents[0]?.event_values.description }
          dateField="date"
          isOpen={ isOpen }
        /> :
      null
    }
  </Div>
)

export default TimelineEvent
