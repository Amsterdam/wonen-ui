(self.webpackChunk_amsterdam_wonen_ui=self.webpackChunk_amsterdam_wonen_ui||[]).push([[792],{"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src\/stories\/(?!\.)(?=.)[^/]*?\.stories\.(tsx|mdx))$/.exec(path))return;const pathRemainder=path.substring(14);return __webpack_require__("./src/stories lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/stories\\/(?%21\\.)(?=.)[^/]*?\\.stories\\.(tsx%7Cmdx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./.storybook/preview.js")])})},"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators});var _amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/GlobalStyle/GlobalStyle.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const decorators=[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_1__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_2__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"2em"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})]})]},"./src/stories lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/stories\\/(?%21\\.)(?=.)[^/]*?\\.stories\\.(tsx%7Cmdx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./CaseIdDisplay.stories":["./src/stories/CaseIdDisplay.stories.tsx",551,997,830],"./CaseIdDisplay.stories.tsx":["./src/stories/CaseIdDisplay.stories.tsx",551,997,830],"./DateDisplay.stories":["./src/stories/DateDisplay.stories.tsx",551,997,735],"./DateDisplay.stories.tsx":["./src/stories/DateDisplay.stories.tsx",551,997,735],"./DayDisplay.stories":["./src/stories/DayDisplay.stories.tsx",551,997,227],"./DayDisplay.stories.tsx":["./src/stories/DayDisplay.stories.tsx",551,997,227],"./DefinitionList.stories":["./src/stories/DefinitionList.stories.tsx",551,997,0],"./DefinitionList.stories.tsx":["./src/stories/DefinitionList.stories.tsx",551,997,0],"./EventsTimeline.stories":["./src/stories/EventsTimeline.stories.tsx",551,997,169],"./EventsTimeline.stories.tsx":["./src/stories/EventsTimeline.stories.tsx",551,997,169],"./FinancialDisplay.stories":["./src/stories/FinancialDisplay.stories.tsx",551,997,726],"./FinancialDisplay.stories.tsx":["./src/stories/FinancialDisplay.stories.tsx",551,997,726],"./HolidayRental.stories":["./src/stories/HolidayRental.stories.tsx",551,997,347],"./HolidayRental.stories.tsx":["./src/stories/HolidayRental.stories.tsx",551,997,347],"./HolidayRentalReports.stories":["./src/stories/HolidayRentalReports.stories.tsx",551,997,480],"./HolidayRentalReports.stories.tsx":["./src/stories/HolidayRentalReports.stories.tsx",551,997,480],"./List.stories":["./src/stories/List.stories.tsx",551,997,199],"./List.stories.tsx":["./src/stories/List.stories.tsx",551,997,199],"./PermitsOverview.stories":["./src/stories/PermitsOverview.stories.tsx",551,997,152],"./PermitsOverview.stories.tsx":["./src/stories/PermitsOverview.stories.tsx",551,997,152],"./PermitsSynopsis.stories":["./src/stories/PermitsSynopsis.stories.tsx",551,997,939],"./PermitsSynopsis.stories.tsx":["./src/stories/PermitsSynopsis.stories.tsx",551,997,939],"./PersonNameDisplay.stories":["./src/stories/PersonNameDisplay.stories.tsx",551,997,621],"./PersonNameDisplay.stories.tsx":["./src/stories/PersonNameDisplay.stories.tsx",551,997,621],"./PersonRoleDisplay.stories":["./src/stories/PersonRoleDisplay.stories.tsx",551,997,546],"./PersonRoleDisplay.stories.tsx":["./src/stories/PersonRoleDisplay.stories.tsx",551,997,546],"./Residents.stories":["./src/stories/Residents.stories.tsx",551,997,842],"./Residents.stories.tsx":["./src/stories/Residents.stories.tsx",551,997,842],"./Table.stories":["./src/stories/Table.stories.tsx",551,997,897],"./Table.stories.tsx":["./src/stories/Table.stories.tsx",551,997,897],"./TextWithLinebreaks.stories":["./src/stories/TextWithLinebreaks.stories.tsx",551,997,988],"./TextWithLinebreaks.stories.tsx":["./src/stories/TextWithLinebreaks.stories.tsx",551,997,988],"./TextWithURLs.stories":["./src/stories/TextWithURLs.stories.tsx",551,997,728],"./TextWithURLs.stories.tsx":["./src/stories/TextWithURLs.stories.tsx",551,997,728]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src/stories lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/stories\\/(?%21\\.)(?=.)[^/]*?\\.stories\\.(tsx%7Cmdx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[428],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);