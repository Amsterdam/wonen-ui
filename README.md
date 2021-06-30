# wonen-ui
This npm package allows sharing functionalities / components between different applications (AZA & TOP) of Gemeente Amsterdam Wonen.

## Components
The package contains the following components:

- CaseIdDisplay
- DateDisplay
- DayDisplay
- FinancialDisplay
- EventsTimeline
- Timeline

## Options
### TimelineEvents
#### spacingHorizontal
Depending on the style and size of parent-container one can add horizontal spacing to the TimelineEvents with the use of parameter ```spacingHorizontal```.
This uses the ```themeSpacing``` of @amsterdam/amsterdam-styled-components.
For instance, when you want a spacing of 16 pixels on both sides you can do:

```<TimelineEvents items={ timelineEvents } spacingHorizontal={4} />```

#### countItemType
In order to add a counter to a specific event-type, you can add the property ```countItemType```.
It shows the couner from #2 and up.
This is only mvp which means you can add it for one event-type only.
For instance, to count the number of Visits:

```<TimelineEvents items={ eventsTimelineData } countItemType="VISIT" />```

## Install

Install dependencies:
```
npm install @amsterdam/wonen-ui
```

## Pulish the package to npm

Merge any changes into main and pull main to your local machine.
In the root folder do:
```
./publish.sh
```
The package-versionnumber will automatically update.

To use the latest package in your project, go to the root folder of your project and do
```
npm install @amsterdam/wonen-ui@latest
```
## Storybook
See [Storybook](https://amsterdam.github.io/wonen-ui/)

You can check the behavior of the components locally in Storybook (styling is not working properly in Storybook)
```
npm run storybook
```

Build Storybook in `/docs` folder
```
npm run storybook:build
```

## Testing
Run the unit tests with
```
npm run test
```
