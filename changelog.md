# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

### Not released yet

- Added header option for Residents
- Changed property `hasFixedColumn` to `lastColumnFixed` in `Table` component
- Changed property `hasRowsSeperated` to `horizontalBordered` in `DefinitionList` component

## [1.0.34] 2022-06-21
### Bugfix

- Bugfix `<Residents />`

## [1.0.33] 2022-05-31
### Improvement

- Added DefinitionListData type

## [1.0.30] 2022-05-19
### Bugfix

- Updated types PersonNameDisplay and PersonEntityDisplay

## [1.0.29] 2022-05-10
### Bugfix

- Bugfix `<Residents />` resident since

## [1.0.28] 2022-05-09
### Feature

- Bugfix `<Residents />`
- Updated `<EventsTimreline />` for dictionary

## [1.0.27] 2022-05-03
### Improvement

- Added empty text `<Residents />`

## [1.0.26] 2022-04-28
### Bugfix

- Updated visit dictionary

## [1.0.25] 2022-04-28
### Bugfix

- Bugfix `<Residents />` data structure

## [1.0.24] 2022-04-19
### Bugfix

-  Bugfix `<Residents />` component for age and day of birth

## [1.0.23] 2022-04-12
### Feature

-  Added `<Residents />` component
-  Removed default permits Header

## [1.0.21] 2022-03-22
### Feature

-  Added `nuisance_detected`

## [0.0.72] 2021-11-15
### Improvement

-  Table component improvements
-  Consistent prop names

## [0.0.69] 2021-10-13
### Fixed

-  Vertical align content in table row to the middle.
## [0.0.47] 2021-06-23
### Fixed

-  Bug with replaceUrl, only strings starting with `http://` or `https://` will be replaced by an anchorlink. `www` not anymore.
## [0.0.46] 2021-06-22
### Added

-   New summontype "Sluitingsproces"

## [0.0.45] 2021-06-15
### Added

-   Type CASE_CLOSE added to Timeline
## [0.0.44] 2021-06-11
### Added

-   Crossbrowser fix: set minimumFractionDigits to 0
## [0.0.41] 2021-06-11
### Added

-   Added FinancialDisplay for displaying amounts with a eurosign and dots
## [0.0.40] 2021-06-09

-   Added responsive styling for background in timeline
## [0.0.39] 2021-06-08

-   Copy change
## [0.0.38] 2021-06-08

-   Cleanup code
## [0.0.37] 2021-06-08

### Added

-   Copy change "Huisbezoek" => "Bezoek"
-   Copy change "Aanvraag machtiging" => "Nieuw bezoek inclusief machtigingsaanvraag"
## [0.0.36] 2021-06-03

### Added

-   Added sanction_id to Decision in Timeline.
-   Added theme to Debrief in Timeline.
## [0.0.35] 2021-06-03

### Added

-   Added new fields to Debrief.
## [0.0.34] 2021-06-01

### Added

-   Added description_citizenreport. Removed citizenreport fields from Reason-event.
## [0.0.33] 2021-05-28

### Added

-   Added an optional description to Schedule in the timeline.
## [0.0.32] 2021-05-27

### Added

-   Added the optional report to CaseReason. If there is a report, it will be shown in the timeline.

## [0.0.31] 2021-05-21

### Added

-   Textchange label Schedule-item

## [0.0.30] 2021-05-19

### Added

-   Stylingfixes mobile
-   Show an empty array as "-"

## [0.0.29] 2021-05-18

### Added

-   Optional property `className` added to `DateDisplay`
-   Static form `CitizenReport` added to `EventsTimeline`
-   `Ellipsis` added tot titles in the Timeline
## [0.0.28] 2021-05-10

### Added

-   Dynamic formfields will be rendered as well from now on.

## [0.0.27] 2021-05-10

### Added

-   When the description-text contains link-text this text will be shown as a working hyperlink
