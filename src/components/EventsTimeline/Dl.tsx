import styled from "styled-components"
import { themeColor, themeSpacing, breakpoint } from "@amsterdam/asc-ui"

// STYLING
export default styled.dl`
  max-width: 800px;
  margin: 0;
  
  >div:not(:last-of-type) {
    margin-bottom: ${ themeSpacing(4) };
  }
  dd, dt {
    padding: ${ themeSpacing(1) } 0;
  }
  dt {
    word-wrap: break-word;
    color: ${ themeColor("tint","level5") };
  }
  dd {
    margin: 0;
  }

  @media ${ breakpoint("min-width", "tabletM") } {
    
    margin-top: ${ themeSpacing(2) };
    margin-bottom: ${ themeSpacing(2) };
    &:after {
      clear: both;
      content: "";
      display: table;
    }

    dd, dt {
      width: 50%;
    }
    dt {
      float: left;
      clear: both;
      word-wrap: break-word;
      padding-right: ${ themeSpacing(5) };
      color: ${ themeColor("tint","level5") };
      @media ${ breakpoint("min-width", "tabletM") } {
        width: 30%;
      }
    }
    dd {
      margin: 0;
      padding-right: 20px;
      float: right;
      clear: right;
      @media ${ breakpoint("min-width", "tabletM") } {
        width: 70%;
      }
    }
  }
`
