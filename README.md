# wonen-ui
In order to be able to share functionalities between the different applications of Wonen (ZKS & TOP), we want to make npm packages out of this.

## Components
The package contains the following components:

- CaseIdDisplay
- DateDisplay
- DayDisplay
- Timeline
- TimelineEvents

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
npm install
```
```
npm run build
```
```
npm version patch
```
```
npm run publish
```
The package-versionnumber will automatically update.

To use the latest package in your project, go to the root folder of your project and do 
```
npm install @amsterdam/wonen-ui@latest
```
## Storybook
You can check the behavior of the components locally in Storybook (styling is not working properly in Storybook)
```
npm run storybook
```

## Testing
Run the unit tests with
```
npm run test
```
