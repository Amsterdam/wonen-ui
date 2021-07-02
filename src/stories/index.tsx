import { GlobalStyle, ThemeProvider } from "@amsterdam/asc-ui"
import {  storiesOf  } from "@storybook/react"
import EventsTimeline from "../components/EventsTimeline/EventsTimeline"
import DateDisplay from "../components/DateDisplay/DateDisplay"
import DayDisplay from "../components/DayDisplay/DayDisplay"
import CaseIdDisplay from "../components/CaseIdDisplay/CaseIdDisplay"
import eventsTimelineData from "./eventsTimelineData"
import DefinitionList from "../components/DefinitionList/DefinitionList"
import definitionListData from "./definitionListData"

// Timeline
storiesOf("EventsTimeline", module).add("Event Tijdlijn", () => (
  <ThemeProvider>
    <GlobalStyle />
    <EventsTimeline items={ eventsTimelineData } spacingHorizontal={ 6 } />
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

storiesOf("DefinitionList", module).add("Met titel", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DefinitionList
      title="Objectdetails"
      values={ definitionListData }
    />
  </ThemeProvider>
))