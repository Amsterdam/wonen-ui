# wonen-ui
In order to be able to share functionalities between the different applications of Wonen (ZKS & TOP), we want to make npm packages out of this.

## Components
The package contains the following components:

- CaseIdDisplay
- DateDisplay
- DayDisplay
- Timeline
- TimelineEvents


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
