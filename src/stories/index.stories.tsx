import { GlobalStyle, ThemeProvider } from "@amsterdam/asc-ui"
import { storiesOf } from "@storybook/react"
import {
  CaseIdDisplay,
  DateDisplay,
  DayDisplay,
  List,
  DefinitionList,
  Table,
  EventsTimeline,
  FinancialDisplay,
  PersonNameDisplay,
  PersonRoleDisplay,
  TextWithLinebreaks,
  TextWithURLs
} from "../index"
import eventsTimelineData from "./eventsTimelineData"
import definitionListData from "./definitionListData"

import { sortNumbers } from "../components/Data/Table/utils/sorters"

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

// Data

// List
storiesOf("List", module).add("Met titel", () => (
  <ThemeProvider>
    <GlobalStyle />
    <List title="Lijst" data={ ["Alfa", "Beta", "Gamma"] } />
  </ThemeProvider>
))

// DefinitionList
storiesOf("DefinitionList", module).add("Default, met titel", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DefinitionList
      title="Objectdetails"
      data={ definitionListData }
    />
  </ThemeProvider>
))
storiesOf("DefinitionList", module).add("Default, zonder titel", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DefinitionList
      data={ definitionListData }
    />
  </ThemeProvider>
))
storiesOf("DefinitionList", module).add("Zonder borders", () => (
  <ThemeProvider>
    <GlobalStyle />
    <DefinitionList
      title="Objectdetails"
      data={ definitionListData }
      hasRowsSeperated={ false }
    />
  </ThemeProvider>
))

// Table
storiesOf("Table", module).add("loading", () => (
  <ThemeProvider>
    <GlobalStyle />
    <Table
      columns={ [
        { header: "????n" },
        { header: "twee" },
        { header: "drie", minWidth: 200 }
      ] }
      data={ undefined }
      loading={ true }
      numLoadingRows={ 6 }
      hasFixedColumn={ true }
    />
  </ThemeProvider>
))

storiesOf("Table", module).add("arrays", () => (
  <ThemeProvider>
    <GlobalStyle />
    <Table
      columns={ [
        { header: "number" },
        { header: "string" },
        { header: "ReactNode" }
      ] }
      data={ [
        [1, "een", <span>span</span>],
        [2, "twee", <>ReactFragment</>]
      ] }
    />
  </ThemeProvider>
))

storiesOf("Table", module).add("objects", () => (
  <ThemeProvider>
    <GlobalStyle />
    <Table
      columns={ [
        { header: "number", dataIndex: "num", sorter: sortNumbers, defaultSorting: "ASCEND" },
        { header: "string", dataIndex: "str" },
        { header: "ReactNode", dataIndex: "n", emptyValue: "Empty node" }
      ] }
      data={ [
        { num: 1, str: "een", n: <span>span</span>, excess: true },
        { num: 2, str: "twee", n: <>ReactFragment</> },
        { num: 3, str: undefined, n: null, excess: false },
        { num: 4, str: "vier", n: { value: "value", node: <span>node incl. value</span> } }
      ] }
      emptyValue="-"
      onClickRow={ (data: any) => console.log(data) }
    />
  </ThemeProvider>
))


// EventsTimeline
storiesOf("EventsTimeline", module).add("Event Tijdlijn", () => (
  <ThemeProvider>
    <GlobalStyle />
    <EventsTimeline events={ eventsTimelineData } spacingHorizontal={ 6 } hasTransparentBackground={ false } />
  </ThemeProvider>
))

// FinancialDisplay
storiesOf("FinancialDisplay", module).add("default", () => (
  <ThemeProvider>
    <GlobalStyle />
    <FinancialDisplay amount={1250}/>
  </ThemeProvider>
))


// PersonNameDisplay
storiesOf("PersonNameDisplay", module).add("default", () => (
  <ThemeProvider>
    <GlobalStyle />
    <PersonNameDisplay
        sex="V"
        firstName="A.C."
        namePrefix="van"
        name="Gouderinge"
    />
  </ThemeProvider>
))

// PersonRoleDisplay
storiesOf("PersonRoleDisplay", module).add("Eigenaar", () => (
  <ThemeProvider>
    <GlobalStyle />
    <PersonRoleDisplay personRole="PERSON_ROLE_OWNER" />
  </ThemeProvider>
))

storiesOf("PersonRoleDisplay", module).add("Bewoner", () => (
  <ThemeProvider>
    <GlobalStyle />
    <PersonRoleDisplay personRole="PERSON_ROLE_RESIDENT" />
  </ThemeProvider>
))

storiesOf("PersonRoleDisplay", module).add("Tussenpersoon", () => (
  <ThemeProvider>
    <GlobalStyle />
    <PersonRoleDisplay personRole="PERSON_ROLE_MIDDLEMAN" />
  </ThemeProvider>
))


// TextWithLineBreaks
storiesOf("TextWithLinebreaks", module).add("Text inclusief linebreaks", () => (
  <ThemeProvider>
    <GlobalStyle />
    <TextWithLinebreaks>{ `line 1
line 2

line 4`

}
    </TextWithLinebreaks>
  </ThemeProvider>
))

// TextWithURLs

storiesOf("TextWithURLs", module).add("Text inclusief URL's", () => (
  <ThemeProvider>
    <GlobalStyle />
    <TextWithURLs text="http://example.com/ https://www.example.com" />
  </ThemeProvider>
))
