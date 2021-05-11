import React from "react"
import {  storiesOf  } from "@storybook/react"
import Timeline from "../components/Timeline/Timeline"
import TimelineEvents from "../components/EventsTimeline/TimelineEvents"
import { CaseEvent } from "../components/EventsTimeline/TimelineEvent"
import DateDisplay from "../components/DateDisplay/DateDisplay"
import DayDisplay from "../components/DayDisplay/DayDisplay"
import CaseIdDisplay from "../components/CaseIdDisplay/CaseIdDisplay"

export type TimelineEventItem = {
  type: string
  caseEvents: CaseEvent[]
}

const eventsTimelineData: TimelineEventItem[] = [
  {
    type: "GENERIC_TASK",
    caseEvents: [
      { id: 437,
        event_values: {
          author: "Local User",
          date_added: "2021-05-11T12:54:04.349717Z",
          description: "Dynamisch formulier 1",
          variables: {
            field_1: {
              label: "Dit is het label",
              value: "Eerste veld"
            },
            field_2: {
              label: "Dit is het label voor een boolean",
              value: "true"
            },
            field_3: {
              label: "Label Enum",
              value: "waarde_2"
            }
          }
        },
        date_created: "2021-05-11T14:54:04+0200",
        type: "GENERIC_TASK",
        emitter_id: 137,
        case: 90
      }
    ]
  },
  {
    type: "DEBRIEFING",
    caseEvents: [
      { id: 2535,
        event_values: {
          author: "A. Beecee",
          date_added: "2021-03-26T19:19:26.345631Z",
          violation: "YES",
          feedback: "Hier de opmerkingen.."
        },
        date_created: "2021-03-26T20:19:26+0100",
        emitter_id: 317,
        case: 3394,
        type: "DEBRIEFING"
      },
      { id: 2533,
        event_values: {
          author: "A. Beecee",
          date_added: "2021-03-27T19:19:26.345631Z",
          violation: "YES",
          feedback: "Hier de opmerkingen..."
        },
        date_created: "2021-03-26T20:19:26+0100",
        emitter_id: 317,
        case: 3394,
        type: "DEBRIEFING"
      }
    ]
  },
  { 
    type: "DECISION", 
    caseEvents:[
      { 
        id: 222,
        event_values: {
          author: "A. Beecee",
          date_added: "2021-04-08T08:56:54.371354Z",
          persons: ["Donald Duck"],
          description: "Toelichting",
          type: "Boete",
          sanction_amount: 456
        },
        date_created: "2021-04-08T10:56:54+0200",
        type: "DECISION",
        emitter_id: 3394,
        case: 3394
      }
    ]
  },
  {
    type: "DEBRIEFING",
    caseEvents: [
      { id: 2532,
        event_values: {
          author: "A. Beecee",
          date_added: "2021-03-26T19:19:26.345631Z",
          violation: "YES",
          feedback: "Advertentie gevonden op https://www.nu.nl, en http://www.nos.nl."
        },
        date_created: "2021-03-26T20:19:26+0100",
        emitter_id: 317,
        case: 3394,
        type: "DEBRIEFING"
      },
      { id: 2533,
        event_values: {
          author: "A. Beecee",
          date_added: "2021-03-27T19:19:26.345631Z",
          violation: "YES",
          feedback: "Hier de opmerkingen..."
        },
        date_created: "2021-03-26T20:19:26+0100",
        emitter_id: 317,
        case: 3394,
        type: "DEBRIEFING"
      }
    ]
  },
  {
    type: "VISIT",
    caseEvents: [
      { id: 227,
        event_values: {
          start_time: "2021-01-01T11:34:00Z",
          authors: [
            "Evqnzfqaeg",
            "Sbtsjuwhnu"
          ],
          situation: "access_granted",
          observations: [],
          can_next_visit_go_ahead: true,
          can_next_visit_go_ahead_description: null,
          suggest_next_visit: null,
          suggest_next_visit_description: null
        },
        date_created: "2021-04-08T11:25:07+0200",
        type: "VISIT",
        emitter_id: 81,
        case: 3394
      }
    ]
  },
  {
    type: "CASE",
    caseEvents:[
      {
        id: 2264,
        event_values: {
          start_date: "2021-03-17",
          end_date: null,
          reason: "Melding",
          description: "19:31",
          author: "A. Beecee"
        },
        date_created: "2021-03-17T19:31:11+0100",
        type: "CASE",
        emitter_id: 3394,
        case: 3394
      }
    ]
  }
]

storiesOf("TimelineEvents", module).add("Tijdlijn", () => (
  <TimelineEvents items={ eventsTimelineData } spacingHorizontal={6} countItemType="VISIT" />
))

storiesOf("Timeline", module).add("Tijdlijn", () => (
  <Timeline title="Titel van het event">
    <p>Inhoud van het event</p>
  </Timeline>
))

storiesOf("DateDisplay", module).add("Datum in cijfers", () => (
  <DateDisplay date="2021-03-31T10:51:48+0200" />
))

storiesOf("DateDisplay", module).add("Datum voluit", () => (
  <DateDisplay date="2021-03-31T10:51:48+0200" full={true} />
))

storiesOf("DayDisplay", module).add("Dag, kleine letter", () => (
  <DayDisplay date="2021-03-31T10:51:48+0200" />
))

storiesOf("DayDisplay", module).add("Dag, hoofdletter", () => (
  <DayDisplay date="2021-03-31T10:51:48+0200" capitalize={true} />
))

storiesOf("CaseIdDisplay", module).add("CaseId, 6 cijfers", () => (
  <CaseIdDisplay id="1234" />
))
storiesOf("CaseIdDisplay", module).add("CaseId, undefined", () => (
  <CaseIdDisplay />
))