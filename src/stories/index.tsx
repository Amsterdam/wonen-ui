import { GlobalStyle, ThemeProvider } from "@amsterdam/asc-ui"
import {  storiesOf  } from "@storybook/react"
import Timeline from "../components/Timeline/Timeline"
import TimelineEvents from "../components/EventsTimeline/EventsTimeline"
import DateDisplay from "../components/DateDisplay/DateDisplay"
import DayDisplay from "../components/DayDisplay/DayDisplay"
import CaseIdDisplay from "../components/CaseIdDisplay/CaseIdDisplay"
import eventsTimelineData from "./eventsTimelineData"

// Timeline

storiesOf("EventsTimeline", module).add("Event Tijdlijn", () => (
  <ThemeProvider>
    <GlobalStyle />
    <TimelineEvents items={ eventsTimelineData } spacingHorizontal={ 6 } />
  </ThemeProvider>
))

storiesOf("Timeline", module).add("Tijdlijn", () => (
  <ThemeProvider>
    <GlobalStyle />
    <Timeline title="Titel van het event">
      <p>Inhoud van het event</p>
    </Timeline>
  </ThemeProvider>
))


// DateDisplay

storiesOf("DateDisplay", module).add("Datum in cijfers", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DateDisplay date="2021-03-31T10:51:48+0200" />
  </ThemeProvider>
))

storiesOf("DateDisplay", module).add("Datum voluit", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DateDisplay date="2021-03-31T10:51:48+0200" full={ true } />
  </ThemeProvider>
))

storiesOf("DateDisplay", module).add("Datum leeg", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DateDisplay date={ undefined } emptyText="Geen datum" />
  </ThemeProvider>
))

storiesOf("DateDisplay", module).add("Datum ongeldig", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DateDisplay date={ "ongeldig" } />
  </ThemeProvider>
))


// DayDisplay

storiesOf("DayDisplay", module).add("Dag, kleine letter", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DayDisplay date="2021-03-31T10:51:48+0200" />
  </ThemeProvider>
))

storiesOf("DayDisplay", module).add("Dag, hoofdletter", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DayDisplay date="2021-03-31T10:51:48+0200" capitalize={ true } />
  </ThemeProvider>
))


// CaseIdDisplay

storiesOf("CaseIdDisplay", module).add("CaseId, 6 cijfers", () => (
  <ThemeProvider>
    <GlobalStyle />
    <CaseIdDisplay id="1234" />
  </ThemeProvider>
))
storiesOf("CaseIdDisplay", module).add("CaseId, undefined", () => (
  <ThemeProvider>
    <GlobalStyle />
    <CaseIdDisplay />
  </ThemeProvider>
))