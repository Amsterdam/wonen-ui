import React from "react"
import { storiesOf } from "@storybook/react"
import TimelineTest from "../components/timeline/Timeline/TimelineTest"
import Timeline from "../components/timeline/Timeline/Timeline"

storiesOf("TimelineTest", module).add("Met zaak-ID", () => (
  <TimelineTest caseId={1234} />
))
storiesOf("TimelineTest", module).add("Zonder zaak-ID", () => (
  <TimelineTest />
))

storiesOf("Timeline", module).add("Tijdlijn", () => (
  <Timeline title="Event">
    <p>Inhoud van het event</p>
  </Timeline>
))