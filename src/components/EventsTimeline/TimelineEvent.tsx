import React from "react"
import styled from "styled-components"
import { themeSpacing, breakpoint } from "@amsterdam/asc-ui"

import TimelineEventItem from "./TimelineEventItem"
import { scheduleLabelsMap, debriefLabelsMap, genericLabelsMap, reasonLabelsMap, summonLabelsMap, visitLabelsMap, decisionLabelsMap, citizenReportLabelsMap, caseCloseLabelsMap } from "./helpers/dictionaries"
import fields from "./helpers/fields"
import reasonFields from "./events/reasonFields"
import caseCloseFields from "./events/caseCloseFields"
import scheduleFields from "./events/scheduleFields"
import genericTaskFields from "./events/genericTaskFields"
import summonFields from "./events/summonFields"
import debriefingFields from "./events/debriefingFields"
import visitFields from "./events/visitFields"
import decisionFields from "./events/decisionFields"
import citizenReportFields from "./events/citizenReportFields"
import { caseTypesMap } from "./helpers/dictionaries"

export type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "CASE_CLOSE" | "SUMMON" | "GENERIC_TASK" | "SCHEDULE" | "DECISION" | "CITIZEN_REPORT"
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
  margin: 0 ${ ( { spacingHorizontal } ) => themeSpacing( -spacingHorizontal ) } ${ themeSpacing(5) };
  padding: 0 ${ ( { spacingHorizontal } ) => themeSpacing( spacingHorizontal ) };

  @media screen and ${ breakpoint("min-width", "tabletS") } {
    margin: 0 ${ ( { spacingHorizontal } ) => themeSpacing( -(3 - spacingHorizontal) ) } ${ themeSpacing(5) };
    padding: 0 ${ ( { spacingHorizontal } ) => themeSpacing( 3 - spacingHorizontal ) };
  }
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

const TimelineEvent: React.FC<Props> = ({ timelineEventItem: { type, caseEvents }, isOpen = false, spacingHorizontal = 3, useTransparentBackground = false, itemCount }) => (
  <Div role="button" tabIndex={ -1 } spacingHorizontal={ spacingHorizontal } >
    { type === "CASE" ?
        <TimelineEventItem
          fields={ fields(reasonFields, reasonLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      type === "CASE_CLOSE" ?
        <TimelineEventItem
          fields={ fields(caseCloseFields, caseCloseLabelsMap) }
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
          showCount={ true }
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
      type === "CITIZEN_REPORT" ?
        <TimelineEventItem
          fields={ fields(citizenReportFields, citizenReportLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseTypesMap[type] }
          dateField="date_added"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      type === "GENERIC_TASK" ?
        <TimelineEventItem
          fields={ fields(genericTaskFields, genericLabelsMap) }
          caseEvents={ caseEvents }
          title={ caseEvents[0]?.event_values.description }
          dateField="date"
          isOpen={ isOpen }
          useTransparentBackground={ useTransparentBackground }
        /> :
      null
    }
  </Div>
)

export default TimelineEvent
