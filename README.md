# wonen-ui
This npm package allows sharing functionalities / components between different applications (AZA & TOP) of Gemeente Amsterdam Wonen.

## Components
The package contains the following components:

- CaseIdDisplay
- DateDisplay
- DayDisplay
- DefinitionList
- displayDate
- displayTime
- EventsTimeline
- FinancialDisplay
- Icons
- isValidDate
- isDate
- List
- LoadingRows
- PersonNameDisplay
- PersonRoleDisplay
- SmallSkeleton
- Table
- tableSorters
- TextWithLinebreaks
- TextWithURLs

## Options
### TimelineEvents
#### spacingHorizontal
Depending on the style and size of parent-container one can add horizontal spacing to the TimelineEvents with the use of parameter `spacingHorizontal`.
This uses the `themeSpacing` of @amsterdam/asc-ui.
For instance, when you want a spacing of 16 pixels on both sides you can do:

```bash
<EventsTimeline 
  items={ timelineEvents } 
  spacingHorizontal={ 4 } 
/>
```

## How to start development?

Install dependencies:
```bash
npm install
npm start
```

## Pulish the package to npm

Merge any changes into main and pull main to your local machine.
In the root folder run:
```bash
./publish.sh
```
The package-versionnumber will automatically update.

To use the latest package in your project, go to the root folder of your project and run:
```bash
npm install @amsterdam/wonen-ui@latest
```
## Storybook
See [Storybook](https://amsterdam.github.io/wonen-ui/)

You can check the behavior of the components locally in Storybook
```bash
npm run storybook
```

Build Storybook locally in `/docs` folder. Then push and merge into main to update Storybook on Github
```bash
npm run storybook:build
```

## Testing
Run the unit tests with
```bash
npm run test
```
