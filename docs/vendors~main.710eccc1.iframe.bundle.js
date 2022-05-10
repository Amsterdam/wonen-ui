/*! For license information please see vendors~main.710eccc1.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./node_modules/@amsterdam/asc-ui/es/components/Accordion/Accordion.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var ChevronDown=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M16 25.757l-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z",fillRule:"evenodd"},void 0)}),void 0),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),IconStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const AccordionContent=styled_components_browser_esm.default.div`
  transition: border-color 0.1s ease-in-out;
  border: 2px solid ${Object(themeUtils.e)("tint","level3")};
  border-top: none;
  padding: ${Object(themeUtils.f)(4)};
  display: ${({isOpen:isOpen})=>!isOpen&&"none"};
`,AccordionButtonContent=styled_components_browser_esm.default.span`
  text-align: left;
  ${({noMultiline:noMultiline})=>noMultiline?styled_components_browser_esm.css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 20px;
        `:styled_components_browser_esm.css`
          white-space: normal;
        `}
`,AccordionButton=Object(styled_components_browser_esm.default)(Button.a)`
  width: 100%;
  height: initial;
  background-color: ${Object(themeUtils.e)("tint","level3")};

  &:hover,
  /* double ampersand to override this style */
  &&:focus {
    background-color: ${Object(themeUtils.e)("tint","level4")};

    & + ${AccordionContent} {
      border-color: ${Object(themeUtils.e)("tint","level4")};
    }
  }

  ${IconStyle.a} {
    align-self: flex-start;
    margin-left: auto;
    transform: rotate(${({isOpen:isOpen})=>isOpen?"180deg":"0deg"});
    transition: transform 0.3s ease;
  }
`;var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};__webpack_exports__.a=_a=>{var{children:children,title:title,id:idProp,isOpen:isOpen,onToggle:onToggle,noMultiline:noMultiline}=_a,otherProps=__rest(_a,["children","title","id","isOpen","onToggle","noMultiline"]);const uid=Object(hooks.a)(),id=idProp||uid,[open,setOpen]=Object(react.useState)(null!=isOpen&&isOpen);Object(react.useEffect)((()=>{void 0!==isOpen&&isOpen!==open&&setOpen(isOpen)}),[isOpen]);const handleClick=Object(react.useCallback)((()=>{const newOpenState=!open;onToggle&&onToggle(newOpenState),setOpen(newOpenState)}),[open,onToggle]);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(AccordionButton,Object.assign({"aria-controls":id,"aria-expanded":open,id:`label-${id}`,type:"button",variant:"tertiary",iconRight:Object(jsx_runtime.jsx)(ChevronDown,{},void 0),isOpen:open,title:title,onClick:handleClick},otherProps,{children:Object(jsx_runtime.jsx)(AccordionButtonContent,Object.assign({noMultiline:noMultiline},{children:title}),void 0)}),void 0),Object(jsx_runtime.jsx)(AccordionContent,Object.assign({isOpen:open,"aria-labelledby":`label-${id}`,id:id},{children:children}),void 0)]},void 0)}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),IconStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps_size=30,getButtonHeight=theme=>Object(themeUtils.f)(11)({theme:theme}),ArrowRight=styled_components_browser_esm.default.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${Object(themeUtils.e)("secondary")};
  border-right: 0;
  ${Object(polished_esm.h)("border-color","0.1s ease-in-out")}
`,IconLeft=Object(styled_components_browser_esm.default)(Icon.a)`
  margin-right: 10px;
`,IconRight=Object(styled_components_browser_esm.default)(Icon.a)`
  margin-left: 10px;
`;var Button_ButtonStyle=styled_components_browser_esm.default.button`
  height: ${({theme:theme})=>getButtonHeight(theme)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:sizeProp,theme:theme})=>sizeProp?"0":Object(themeUtils.f)(3,4)({theme:theme})};
  ${({size:sizeProp,square:square})=>(sizeProp||square)&&styled_components_browser_esm.css`
      display: flex;
      align-items: center;
      justify-content: center;
      ${Object(polished_esm.g)(sizeProp||defaultProps_size)}// width and height
    `}
  ${Object(polished_esm.h)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:theme,variant:variant,color:color})=>{switch(variant){case"primary":return styled_components_browser_esm.css`
          min-width: 90px;
          background-color: ${Object(themeUtils.e)("primary")};
          color: ${Object(polished_esm.e)(Object(themeUtils.e)("primary")({theme:theme}))};
          ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.e)("primary")({theme:theme}))};
          }
        `;case"secondary":return styled_components_browser_esm.css`
          min-width: 90px;
          background-color: ${Object(themeUtils.e)("secondary")};
          color: ${Object(themeUtils.e)("tint","level1")};
          ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.e)("secondary")({theme:theme}))};
          }

          ${taskflow=>taskflow&&styled_components_browser_esm.css`
              &:not(:disabled)&:focus
                ${ArrowRight},
                &:not(:disabled)&:hover
                ${ArrowRight} {
                border-left-color: ${Object(polished_esm.a)(.1,Object(themeUtils.e)("secondary")({theme:theme}))};
              }
            `}
        `;case"tertiary":return styled_components_browser_esm.css`
          min-width: 90px;
          background-color: ${Object(themeUtils.e)("tint","level4")};
          ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.e)("tint","level4")({theme:theme}))};
          }
        `;case"primaryInverted":return styled_components_browser_esm.css`
          min-width: 90px;
          color: ${Object(themeUtils.e)("primary")};
          border: 1px solid ${Object(themeUtils.e)("primary")};
          background-color: ${Object(themeUtils.e)("tint","level1")};
          ${Object(themeUtils.d)(Object(themeUtils.e)("primary","main"))};

          &:hover {
            outline: 1px solid ${Object(themeUtils.e)("primary")};
          }
        `;case"textButton":return styled_components_browser_esm.css`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${Object(themeUtils.e)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${Object(themeUtils.d)(Object(themeUtils.e)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${Object(polished_esm.h)("color","0s")}

          &:hover {
            color: ${Object(themeUtils.e)("secondary")};
            ${Object(themeUtils.d)(Object(themeUtils.e)("secondary","main"))};
          }

          ${IconLeft} {
            margin-right: ${Object(themeUtils.f)(1)};
          }
          ${IconRight} {
            margin-left: ${Object(themeUtils.f)(1)};
          }
        `;case"blank":return styled_components_browser_esm.css`
          background-color: ${Object(themeUtils.e)("tint","level1")};
          ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level7"))};
          &:hover {
            background-color: ${Object(themeUtils.e)("tint","level3")};
          }
        `;case"application":return styled_components_browser_esm.css`
          border: 1px solid ${Object(themeUtils.e)("tint","level7")};
          background-color: ${Object(themeUtils.e)("tint","level1")};
          height: 32px;
          padding: ${Object(themeUtils.f)(1,2)};
          ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level7"))};
          &:hover {
            background-color: ${Object(themeUtils.e)("tint","level4")};
          }
        `;default:return styled_components_browser_esm.css`
          color: ${color?Object(polished_esm.e)(Object(themeUtils.e)(color)({theme:theme})):Object(themeUtils.e)("primary")({theme:theme})};
          ${color&&styled_components_browser_esm.css`
            background: ${Object(themeUtils.e)(color)};
          `}

          ${!color&&styled_components_browser_esm.css`
            border: 1px solid ${Object(themeUtils.e)("primary")};
          `}

        &:hover {
            background: ${color?Object(themeUtils.e)(color,"dark")({theme:theme}):Object(themeUtils.e)("tint","level3")({theme:theme})};
            ${!color&&styled_components_browser_esm.css`
              outline: 1px solid ${Object(themeUtils.e)("primary")};
            `}
          }
        `}}}
  ${styled_components_browser_esm.css`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`} // ie fix
  ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.css`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:theme})=>getButtonHeight(theme)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${ArrowRight}:after {
        opacity: 1;
      }
    `}
  ${Icon.a} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${Object(themeUtils.e)("tint","level4")};
    background-color: ${Object(themeUtils.e)("tint","level3")};
    ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.css`
        ${ArrowRight} {
          border-left-color: ${Object(themeUtils.e)("tint","level3")};
        }
      `}
    ${({variant:variant})=>variant&&"textButton"===variant&&styled_components_browser_esm.css`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Button=Object(react.forwardRef)(((_a,ref)=>{var{children:children,iconLeft:iconLeft,iconRight:iconRight,icon:icon,iconSize:iconSize,taskflow:taskflow}=_a,otherProps=__rest(_a,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);const iconProps={size:iconSize||IconStyle.b.size};return Object(jsx_runtime.jsxs)(Button_ButtonStyle,Object.assign({ref:ref},otherProps,{taskflow:taskflow},{children:[iconLeft&&Object(jsx_runtime.jsx)(IconLeft,Object.assign({},iconProps,{children:iconLeft}),void 0),icon?Object(jsx_runtime.jsx)(Icon.a,Object.assign({},iconProps,{children:icon}),void 0):children,iconRight&&Object(jsx_runtime.jsx)(IconRight,Object.assign({},iconProps,{children:iconRight}),void 0),taskflow&&Object(jsx_runtime.jsx)(ArrowRight,{},void 0)]}),void 0)}));__webpack_exports__.a=Button},"./node_modules/@amsterdam/asc-ui/es/components/GlobalStyle/GlobalStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  ${Object(polished__WEBPACK_IMPORTED_MODULE_0__.c)()}
  ${({theme:theme})=>Object(_utils__WEBPACK_IMPORTED_MODULE_2__.c)("globalStyle")({theme:theme})}

  body {
    font-family: ${Object(_utils__WEBPACK_IMPORTED_MODULE_2__.c)("typography.fontFamily")};
  }

  /* Display reset for older browsers that don't support certain HTML5 elements */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  
  /* Use border-box sizing by default for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  } 
`;__webpack_exports__.a=GlobalStyle},"./node_modules/@amsterdam/asc-ui/es/components/Heading/Heading.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TypographyStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Typography_Typography=_a=>{var message,{children:children}=_a,otherProps=__rest(_a,["children"]);return otherProps.color&&(message="You are using the deprecated `color` prop in the `Typography` component. Please use your own custom style rules",console.warn(message)),Object(jsx_runtime.jsx)(TypographyStyle.a,Object.assign({},otherProps,{children:children}),void 0)};const HeaderStyleCSS=styled_components_browser_esm.css`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;var HeadingStyle=Object(styled_components_browser_esm.default)(Typography_Typography)`
  ${HeaderStyleCSS}
`,Heading_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Heading=_a=>{var{children:children,as:as}=_a,otherProps=Heading_rest(_a,["children","as"]);return Object(jsx_runtime.jsx)(HeadingStyle,Object.assign({forwardedAs:as},otherProps,{children:children}),void 0)};Heading.defaultProps={as:"h1"};__webpack_exports__.a=Heading},"./node_modules/@amsterdam/asc-ui/es/components/Hidden/Hidden.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const WARNING_MESSAGES_noProps="You must pass a query, minBreakpoint, or maxBreakpoint",WARNING_MESSAGES_bothQueryAndOther="You are using both the query from and a minBreakpoint or a maxBreakpoint. The query prop will be ignored.";var hooks_useMatchMedia=({minBreakpoint:minBreakpoint,maxBreakpoint:maxBreakpoint,query:query})=>{let mediaQuery=query;const breakpoints=(theme=>Object.keys(theme.breakpoints).reduce(((acc,key)=>Object.assign(Object.assign({},acc),{[key]:theme.breakpoints[key]("min-width"),[`${key}Max`]:theme.breakpoints[key]("max-width")})),{}))(Object(react.useContext)(styled_components_browser_esm.ThemeContext));minBreakpoint&&maxBreakpoint?mediaQuery=`${breakpoints[minBreakpoint]} and ${breakpoints[`${maxBreakpoint}Max`]}`:(minBreakpoint||maxBreakpoint)&&(mediaQuery=breakpoints[minBreakpoint||`${maxBreakpoint}Max`]);const[isMatch,setIsMatch]=Object(react.useState)(!mediaQuery||"undefined"!=typeof window&&window.matchMedia(mediaQuery).matches),handleMediaQueryListEvent=({matches:matches})=>setIsMatch(matches);return query&&(minBreakpoint||maxBreakpoint)&&console.warn(WARNING_MESSAGES_bothQueryAndOther),Object(react.useEffect)((()=>{let matchMedia;return mediaQuery&&"undefined"!=typeof window?(matchMedia=window.matchMedia(mediaQuery),handleMediaQueryListEvent(matchMedia),matchMedia.addEventListener?matchMedia.addEventListener("change",handleMediaQueryListEvent):matchMedia.addListener(handleMediaQueryListEvent)):console.warn(WARNING_MESSAGES_noProps),()=>{matchMedia&&"undefined"!=typeof window&&(matchMedia.removeEventListener?matchMedia.removeEventListener("change",handleMediaQueryListEvent):matchMedia.removeListener(handleMediaQueryListEvent))}}),[]),[isMatch]};__webpack_exports__.a=({query:query,minBreakpoint:minBreakpoint,maxBreakpoint:maxBreakpoint,children:children})=>{const[isMatch]=hooks_useMatchMedia({query:query,minBreakpoint:minBreakpoint,maxBreakpoint:maxBreakpoint});return isMatch?null:Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children},void 0)}},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _IconStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.a=_IconStyle__WEBPACK_IMPORTED_MODULE_0__.a},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultProps}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps={size:20,padding:0,rotate:0},IconStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","rotate","padding","inline","color"].includes(prop)&&defaultValidatorFn(prop)})`
  display: ${({inline:inline})=>inline?"inline-flex":"flex"};
  ${({iconUrl:iconUrl})=>iconUrl&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      background-image: url(${iconUrl});
    `}
  ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    width: ${size-2*padding}px;
    height: ${size-2*padding}px;
  `}
  ${({padding:padding})=>padding&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${padding}px;
    `};
  box-sizing: content-box;
  ${({rotate:rotate=defaultProps.rotate})=>`transform: rotate(${rotate}deg)`};

  & > svg {
    ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${size-2*padding}px;
      height: ${size-2*padding}px;
    `}
  }

  ${({color:color})=>color&&Object(_utils__WEBPACK_IMPORTED_MODULE_1__.d)(color)};
`;__webpack_exports__.a=IconStyle},"./node_modules/@amsterdam/asc-ui/es/components/Pagination/Pagination.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");var ChevronLeft=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M22.857 32l-16-16 16-16 2.9 2.91L12.677 16l13.08 13.09z",fillRule:"evenodd"},void 0)}),void 0);var ChevronRight=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M9.757 32l-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z",fillRule:"evenodd"},void 0)}),void 0),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),Button=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js");const List=styled_components_browser_esm.default.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
`,ListItem=styled_components_browser_esm.default.li`
  min-width: 54px;
  display: inline-flex;
  justify-content: center;
`,baseButtonStyles=styled_components_browser_esm.css`
  color: ${Object(themeUtils.e)("tint","level7")};

  &:not(:disabled):hover {
    color: ${Object(themeUtils.e)("secondary","main")};
    text-decoration: underline;
  }

  ${Object(themeUtils.d)(Object(themeUtils.e)("tint","level7"))}
`,PageNumberStyle=styled_components_browser_esm.default.button.attrs({type:"button"})`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  min-width: 32px;
  appearance: none;
  border: none;
  background: none;
  text-align: center;
  ${baseButtonStyles}
  ${({isCurrent:isCurrent})=>isCurrent&&styled_components_browser_esm.css`
      background-color: ${Object(themeUtils.e)("tint","level5")};
      color: ${Object(themeUtils.e)("bright","main")};
      &:not(:disabled):hover {
        color: ${Object(themeUtils.e)("bright","main")};
      }
    `};
`,PreviousButton=Object(styled_components_browser_esm.default)(Button.a)`
  ${baseButtonStyles}
`,NextButton=Object(styled_components_browser_esm.default)(Button.a)`
  ${baseButtonStyles}
`;var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const DEFAULT_PAGINATION_LENGTH=7;__webpack_exports__.a=_a=>{var{collectionSize:collectionSize,onPageChange:onPageChange,page:page=1,pageSize:pageSize=10,paginationLength:paginationLength=DEFAULT_PAGINATION_LENGTH}=_a,otherProps=__rest(_a,["collectionSize","onPageChange","page","pageSize","paginationLength"]);const[currentPage,setCurrentPage]=Object(react.useState)(page),totalPages=Object(react.useMemo)((()=>Math.ceil(collectionSize/pageSize)),[collectionSize,pageSize]);Object(react.useEffect)((()=>{paginationLength<5&&console.warn("paginationLength prop in Pagination component should be at least 5. If you need a smaller pagination component, please use the CompactPager component. Now falling back to default value")}),[paginationLength]),Object(react.useEffect)((()=>{setCurrentPage(page)}),[page]);const range=Object(react.useMemo)((()=>{let paginatedLength=paginationLength<5?DEFAULT_PAGINATION_LENGTH:paginationLength;paginationLength>totalPages&&(paginatedLength=totalPages);let start=currentPage-Math.floor(paginatedLength/2);return start=Math.max(start,1),start=Math.min(start,1+totalPages-paginatedLength),Array.from({length:paginatedLength},((el,i)=>start+i)).reduce(((acc,pageNr,index)=>0===index&&1!==pageNr?[1,"firstSpacer"]:totalPages>paginatedLength&&index===paginatedLength-2&&currentPage<totalPages-2?[...acc,"lastSpacer",totalPages]:acc.includes("firstSpacer")&&1===index||acc.includes("lastSpacer")&&index===paginatedLength-1?acc:[...acc,pageNr]),[])}),[currentPage,totalPages,paginationLength]),onChangePage=newPage=>{void 0!==onPageChange&&onPageChange(newPage),setCurrentPage(newPage)};return Object(jsx_runtime.jsx)("nav",Object.assign({"aria-label":"paginering",role:"navigation"},otherProps,{children:Object(jsx_runtime.jsxs)(List,{children:[Object(jsx_runtime.jsx)(ListItem,{children:Object(jsx_runtime.jsx)(PreviousButton,Object.assign({type:"button","aria-label":"Vorige pagina",tabIndex:0,"data-testid":"previousButton",onClick:()=>{onChangePage(currentPage-1)},iconLeft:Object(jsx_runtime.jsx)(ChevronLeft,{},void 0),variant:"textButton",disabled:1===currentPage},{children:"vorige"}),void 0)},void 0),range.map((pageNumberOrSpacer=>"number"==typeof pageNumberOrSpacer?Object(jsx_runtime.jsx)(ListItem,{children:Object(jsx_runtime.jsx)(PageNumberStyle,Object.assign({"aria-label":pageNumberOrSpacer===currentPage?`Pagina ${pageNumberOrSpacer}`:`Ga naar pagina ${pageNumberOrSpacer}`,"aria-current":pageNumberOrSpacer===currentPage,"data-testid":`pageButton-${pageNumberOrSpacer}`,onClick:()=>onChangePage(pageNumberOrSpacer),isCurrent:pageNumberOrSpacer===currentPage,tabIndex:pageNumberOrSpacer===currentPage?-1:0},{children:pageNumberOrSpacer}),void 0)},`pag-${pageNumberOrSpacer}`):Object(jsx_runtime.jsx)(ListItem,Object.assign({"data-testid":pageNumberOrSpacer},{children:"…"}),pageNumberOrSpacer))),Object(jsx_runtime.jsx)(ListItem,{children:Object(jsx_runtime.jsx)(NextButton,Object.assign({type:"button","aria-label":"Volgende pagina",tabIndex:0,"data-testid":"nextButton",onClick:()=>{onChangePage(currentPage+1)},iconRight:Object(jsx_runtime.jsx)(ChevronRight,{},void 0),variant:"textButton",disabled:currentPage===totalPages},{children:"volgende"}),void 0)},void 0)]},void 0)}),void 0)}},"./node_modules/@amsterdam/asc-ui/es/components/Paragraph/Paragraph.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TypographyStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js");const ParagraphStyleCSS=styled_components_browser_esm.css`
  margin-top: 0;
  color: inherit;
`;var ParagraphStyle=Object(styled_components_browser_esm.default)(TypographyStyle.a)`
  ${ParagraphStyleCSS};
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};__webpack_exports__.a=_a=>{var{children:children,as:as}=_a,otherProps=__rest(_a,["children","as"]);return Object(jsx_runtime.jsx)(ParagraphStyle,Object.assign({forwardedAs:as},otherProps,{children:children}),void 0)}},"./node_modules/@amsterdam/asc-ui/es/components/Spinner/Spinner.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Spinner=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"},void 0)}),void 0),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js");var Spinner_SpinnerStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","color"].includes(prop)&&defaultValidatorFn(prop)})`
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: ${({size:size})=>size}px;
  height: ${({size:size})=>size}px;

  & svg {
    animation: rotating 1s linear infinite;
  }
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Spinner_Spinner=_a=>{var{size:size,color:color}=_a,otherProps=__rest(_a,["size","color"]);return Object(jsx_runtime.jsx)(Spinner_SpinnerStyle,Object.assign({size:size},otherProps,{children:Object(jsx_runtime.jsx)(Icon.a,Object.assign({size:size,color:color},{children:Object(jsx_runtime.jsx)(Spinner,{},void 0)}),void 0)}),void 0)};Spinner_Spinner.defaultProps={size:20};__webpack_exports__.a=Spinner_Spinner},"./node_modules/@amsterdam/asc-ui/es/components/Tag/Tag.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),TagStyle=styled_components_browser_esm.default.span`
  margin-top: 0;
  display: inline-block;
  padding: ${Object(themeUtils.f)(1)};
  ${({theme:theme,colorType:colorType,colorSubtype:colorSubtype})=>styled_components_browser_esm.css`
    background-color: ${Object(themeUtils.e)(colorType,colorSubtype)({theme:theme})};
    color: ${Object(polished_esm.e)(Object(themeUtils.e)(colorType,colorSubtype)({theme:theme}))};
  `}
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Tag=_a=>{var{children:children}=_a,otherProps=__rest(_a,["children"]);return Object(jsx_runtime.jsx)(TagStyle,Object.assign({},otherProps,{children:children}),void 0)};Tag.defaultProps={colorType:"primary",colorSubtype:"main"};__webpack_exports__.a=Tag},"./node_modules/@amsterdam/asc-ui/es/components/Typography/TypographyStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultTypographyStyles={em:styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-style: italic;
  `};__webpack_exports__.a=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`
  ${({as:as,forwardedAs:forwardedAs})=>{const key=null!=as?as:forwardedAs;return"string"==typeof key&&defaultTypographyStyles[key]}}
  margin: 0;
  ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.b)()};
  font-stretch: normal;
  letter-spacing: normal;
  ${({strong:strong})=>strong&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: 700;
      color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.e)("tint","level7")};
    `}
  ${({color:color})=>color&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.e)(color)};
    `}
  ${({fontSize:fontSize})=>fontSize&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${fontSize}px;
    `}
`},"./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var default_namespaceObject={};__webpack_require__.r(default_namespaceObject),__webpack_require__.d(default_namespaceObject,"DEFAULT_THEME_NAME",(function(){return DEFAULT_THEME_NAME})),__webpack_require__.d(default_namespaceObject,"breakpoints",(function(){return default_breakpoints})),__webpack_require__.d(default_namespaceObject,"colors",(function(){return default_colors})),__webpack_require__.d(default_namespaceObject,"globalStyle",(function(){return default_globalStyle})),__webpack_require__.d(default_namespaceObject,"typography",(function(){return default_typography})),__webpack_require__.d(default_namespaceObject,"layouts",(function(){return default_layouts})),__webpack_require__.d(default_namespaceObject,"maxGridWidth",(function(){return maxGridWidth})),__webpack_require__.d(default_namespaceObject,"maxContainerWidth",(function(){return maxContainerWidth})),__webpack_require__.d(default_namespaceObject,"spacing",(function(){return default_spacing}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cjs=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),cjs_default=__webpack_require__.n(cjs),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const withTypeBreakpoint=size=>type=>`(${type}: ${size+("max-width"===type?-1:0)}px)`,sizes_mobileM=375,sizes_mobileL=414,sizes_tabletS=540,sizes_tabletM=768,sizes_laptop=1024,sizes_laptopM=1200,sizes_laptopL=1430,sizes_desktop=1920,sizes_desktopL=2560;var default_breakpoints={mobileS:withTypeBreakpoint(320),mobileM:withTypeBreakpoint(sizes_mobileM),mobileL:withTypeBreakpoint(sizes_mobileL),tabletS:withTypeBreakpoint(sizes_tabletS),tabletM:withTypeBreakpoint(sizes_tabletM),laptop:withTypeBreakpoint(sizes_laptop),laptopM:withTypeBreakpoint(sizes_laptopM),laptopL:withTypeBreakpoint(sizes_laptopL),desktop:withTypeBreakpoint(sizes_desktop),desktopL:withTypeBreakpoint(sizes_desktopL)};var default_colors={primary:{main:"#004699",dark:"#00387a"},secondary:{main:"#ec0000",dark:"#bc0000"},tint:{level1:"#ffffff",level2:"#f5f5f5",level3:"#e6e6e6",level4:"#b4b4b4",level5:"#767676",level6:"#323232",level7:"#000000"},support:{valid:"#00a03c",invalid:"#ec0000",focus:"#fec813"},supplement:{purple:"#a00078",pink:"#e50082",orange:"#ff9100",yellow:"#ffe600",lightgreen:"#bed200",darkgreen:"#00a03c",lightblue:"#009dec"},bright:{main:"#ffffff"},error:{main:"#ec0000"}};var default_globalStyle="";var default_typography={fontFamily:"Avenir Next, Arial, sans-serif",fontSize:"16px",h1:{color:default_colors.tint.level7,fontSize:"24px",fontWeight:700,letterSpacing:"inherit",lineHeight:"30px",marginBottom:"0",breakpoints:{laptop:{fontSize:"30px",lineHeight:"38px"}}},h2:{color:default_colors.tint.level7,fontSize:"20px",fontWeight:700,letterSpacing:"inherit",lineHeight:"28px",marginBottom:"8px",breakpoints:{laptop:{fontSize:"24px",lineHeight:"30px"}}},h3:{color:default_colors.tint.level7,fontSize:"20px",fontWeight:700,letterSpacing:"inherit",lineHeight:"28px",marginBottom:"8px"},h4:{color:default_colors.tint.level7,fontSize:"18px",fontWeight:700,letterSpacing:"inherit",lineHeight:"25px",marginBottom:"8px"},h5:{color:default_colors.tint.level7,fontSize:"18px",fontWeight:700,letterSpacing:"inherit",lineHeight:"25px",marginBottom:"8px"},h6:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:500,letterSpacing:"inherit",lineHeight:"20px",marginBottom:"0"},a:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"22px",marginBottom:"0",breakpoints:{laptop:{fontSize:"18px",lineHeight:"25px"}}},p:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:"22px",marginBottom:"20px",breakpoints:{tabletS:{marginBottom:"24px"},laptop:{fontSize:"18px",lineHeight:"25px"}}},li:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:"22px",marginBottom:"8",breakpoints:{laptop:{fontSize:"18px",lineHeight:"25px"}}},em:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:1.25,marginBottom:"0"},small:{color:default_colors.tint.level7,fontSize:"14px",fontWeight:400,letterSpacing:"inherit",lineHeight:"18px",marginBottom:"0"},span:{color:default_colors.tint.level7,fontSize:"14px",fontWeight:400,letterSpacing:"inherit",lineHeight:"18px",marginBottom:"0"}};const maxGridWidth=sizes_laptopL,maxContainerWidth=sizes_desktop;var default_layouts={xLarge:{columns:12,margin:44,gutter:24,min:sizes_laptopM},large:{columns:12,margin:32,gutter:24,max:sizes_laptopM,min:sizes_laptop},big:{columns:6,margin:24,gutter:24,max:sizes_laptop,min:sizes_tabletM},medium:{columns:2,margin:20,gutter:20,max:sizes_tabletM,min:sizes_mobileL},small:{columns:1,margin:20,max:sizes_mobileL}};var default_spacing=4;const DEFAULT_THEME_NAME="default";__webpack_exports__.a=({theme:defaultTheme=default_namespaceObject,overrides:overrides,deep:deep=!0,children:children})=>{const theme=deep?cjs_default()(defaultTheme,overrides||{}):Object.assign(Object.assign({},defaultTheme),overrides);return Object(jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,Object.assign({theme:theme},{children:children}),void 0)}},"./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getValueFromTheme})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themeColor})),__webpack_require__.d(__webpack_exports__,"a",(function(){return breakpoint})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getTypographyFromTheme})),__webpack_require__.d(__webpack_exports__,"d",(function(){return svgFill})),__webpack_require__.d(__webpack_exports__,"f",(function(){return themeSpacing}));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const withTheme=cb=>(...params)=>({theme:theme})=>cb(theme,...params),getValueFromTheme=withTheme(((theme,identifier,callback)=>((identifier,callback)=>source=>{try{const value=(obj=source,identifier.split(".").reduce(((reduced,index)=>reduced[index]),obj));return callback?callback(value):value}catch(e){return}var obj})(identifier,callback)(theme))),themeColor=withTheme(((theme,colorType,colorSubtype="main",override)=>override||(colorType?getValueFromTheme(`colors.${[colorType]}.${[colorSubtype]}`)({theme:theme}):getValueFromTheme("colors.tint.level1")({theme:theme})))),breakpoint=withTheme(((theme,type,variant)=>{const breakpointFunc=getValueFromTheme(`breakpoints.${[variant]}`)({theme:theme});return breakpointFunc&&breakpointFunc(type)})),generateCSSFromTypography=({color:color,fontWeight:fontWeight,fontSize:fontSize,letterSpacing:letterSpacing,lineHeight:lineHeight,marginBottom:marginBottom},gutterBottom)=>styled_components_browser_esm.css`
  color: ${color};
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
  margin-bottom: ${"number"==typeof gutterBottom?`${gutterBottom}px`:marginBottom};
`,getTypographyFromTheme=()=>({as:asProp="p",gutterBottom:gutterBottom,styleAs:styleAs,theme:theme})=>{const styles=getValueFromTheme(`typography.${[styleAs||asProp]}`)({theme:theme});if(!styles)return"";const{breakpoints:breakpoints}=styles,otherProps=__rest(styles,["breakpoints"]);return styled_components_browser_esm.css`
      ${generateCSSFromTypography(otherProps,gutterBottom)}
      ${()=>breakpoints?Object.entries(breakpoints).map((([breakpointFromTypography,typoStyles])=>styled_components_browser_esm.css`
                @media screen and ${breakpoint("min-width",breakpointFromTypography)} {
                  ${generateCSSFromTypography(typoStyles||{},gutterBottom)}
                }
              `)):""}
    `},svgFill=(withTheme(((theme,element,property,breakpointRule)=>{const rules=getValueFromTheme(`typography.${[element]}`)({theme:theme});return breakpointRule?rules.breakpoints[breakpointRule]?rules.breakpoints[breakpointRule][property]:"":rules[property]})),styled_components_browser_esm.css`
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,withTheme(((theme,color)=>{const fill="function"==typeof color?color({theme:theme}):color;return styled_components_browser_esm.css`
    & svg {
      circle,
      rect,
      polygon,
      path {
        fill: ${fill};
      }
    }
  `}))),themeSpacing=(withTheme(((theme,animateLoading=!0)=>{const animation=styled_components_browser_esm.keyframes`
      0% {
        background-color: ${themeColor("tint","level3")({theme:theme})};
      }

      50% {
        background-color: ${themeColor("tint","level4")({theme:theme})};
      }

      100% {
        background-color: ${themeColor("tint","level3")({theme:theme})};
      }
    `;return animateLoading?styled_components_browser_esm.css`
        animation: ${animation} 2s ease-in-out infinite;
      `:styled_components_browser_esm.css`
        background-color: ${themeColor("tint","level4")({theme:theme})};
//# sourceMappingURL=vendors~main.710eccc1.iframe.bundle.js.map