import React from "react"
import {  storiesOf  } from "@storybook/react"
import Timeline from "../components/Timeline/Timeline"
import TimelineEvents from "../components/EventsTimeline/TimelineEvents"


export type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "SUMMON" | "GENERIC_TASK"
export type TimelineEventItem = {
  type: string
  caseEvents: {
    readonly id: number
    event_values: {
        [name: string]: any
    }
    readonly date_created: string // date-time
    type: TypeEnum
    emitter_id: number
    case: number
  }[]
}
const eventsTimelineData: TimelineEventItem[] = [{ type:"DEBRIEFING", caseEvents:[{ id:2532,"event_values":{ "author":"Remco Hoff","date_added":"2021-03-26T19:19:26.345631Z","violation":"YES","feedback":"ioyhkjh 2" }, date_created: "2021-03-26T20:19:26+0100", emitter_id: 317, case: 3394, type:"DEBRIEFING" },{ id:2533,"event_values":{ "author":"Remco Hoff","date_added":"2021-03-27T19:19:26.345631Z","violation":"YES","feedback":"ioyhkjh 2" }, date_created: "2021-03-26T20:19:26+0100", emitter_id: 317, case: 3394, type:"DEBRIEFING" }] }, { type:"CASE", caseEvents:[{ "id":2264,"event_values":{ "start_date":"2021-03-17","end_date":null,"reason":"Melding","description":"19:31","author":"Remco Hoff" },"date_created":"2021-03-17T19:31:11+0100","type":"CASE","emitter_id":3394,"case":3394 }  ] } ]


storiesOf("TimelineEvents", module).add("Tijdlijn", () => (
  <TimelineEvents items={ eventsTimelineData } />
))

storiesOf("Timeline", module).add("Tijdlijn", () => (
  <Timeline title="Titel van het event">
    <p>Inhoud van het event</p>
  </Timeline>
))