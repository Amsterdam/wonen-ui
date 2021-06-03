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
    type: "SCHEDULE",
    caseEvents: [
      {
        id: 4040,
        event_values: {
          date_added: "2021-05-20T12:31:45.232760Z",
          action: "Huisbezoek",
          week_segment: "Doordeweeks",
          day_segment: "Overdag",
          priority: "Normaal",
          author: "Remco Hoff",
          description: "Toelichting"
        },
        date_created: "2021-05-20T14:31:45+0200",
        type: "SCHEDULE",
        emitter_id: 219,
        case: 3785 
      }
    ]
  },
  {
    type: "CITIZEN_REPORT",
    caseEvents: [
      {
        id: 3956,
        event_values: {
          date_added: "2021-05-18T09:52:03.154320Z",
          identification: 123456,
          reporter_name: "Donald Duck",
          reporter_phone: "1234567890",
          advertisement_linklist: [
            "http://www.nu.nl",
            "http://www.amsterdam.nl"
          ],
          description_citizenreport: "Korte toelichting..",
          author: "Remco Hoff"
        },
        date_created: "2021-05-18T11:52:03+0200",
        type: "CITIZEN_REPORT",
        emitter_id: 1,
        case: 3766
      }
    ]
  },
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
              value: "Eerste veld",
              value_verbose: "Eerste veld (verbose)"
            },
            field_2: {
              label: "Dit is het label voor een boolean",
              value: true,
              value_verbose: true
            },
            field_3: {
              label: "Label Enum",
              value: "waarde_2",
              value_verbose: "Waarde 2"
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
          sanction_amount: 456,
          sanction_id: "AZA30-4"
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
          violation: "SEND_TO_OTHER_THEME",
          feedback: "Advertentie gevonden op https://www.nu.nl, en http://www.nos.nl.",
          theme: "Kamerverhuur"
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
          author: "A. Beecee",
          identification: 123456,
          reporter_name: "Donald Duck",
          reporter_phone: "1234567890",
          advertisement_linklist: [
            "http://www.nu.nl",
            "http://www.amsterdam.nl"
          ]
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