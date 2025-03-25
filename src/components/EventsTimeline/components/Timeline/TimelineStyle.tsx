import styled, { css } from "styled-components"
import { themeColor, themeSpacing, breakpoint, Icon, Button } from "@amsterdam/asc-ui"

export type Props = {
  isOpen?: boolean
  largeCircle?: boolean
  isNested?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLDivElement>;

const circleSize = {
  desktop: {
    large: "30px",
    small: "20px"
  },
  mobile: {
    large: "24px",
    small: "18px"
  }
}

const CircleWrapperStyle = styled.div<Props>`
  position: relative;
  width: ${ circleSize.mobile.large };
  margin-right: ${ themeSpacing(2) };
  justify-content: center;
  z-index: 1;
  padding: ${ themeSpacing(2) } 0;
  background-color: transparent;
  @media ${ breakpoint("min-width", "laptop") } {
    width: 60px;
    margin-right: 0;
    flex: 0 0 60px;
  }
  /* Force print the background colors on webkit browsers */
  @media print {
    -webkit-print-color-adjust: exact;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 2px;
    height: calc(100% + ${ themeSpacing(10) });
    top: ${ ({ isNested }) => isNested ? themeSpacing(-7) : themeSpacing(3) };
    left: calc(50% - 1px);
    background-color: ${ themeColor("tint", "level4") };
    @media ${ breakpoint("min-width", "laptop") } {
      top: ${ ({ isNested }) => isNested ? themeSpacing(-5.5) : themeSpacing(3) };
    }
  }
`
const CircleStyle = styled(Icon)<Props>`
  position: relative;
  width: ${ circleSize.mobile.large };
  height: ${ circleSize.mobile.large };
  align-items: center;
  margin: 0 auto;
  background-color: ${ themeColor("tint", "level4") };
  border-radius: 50%;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  z-index: 1;
  color: ${ themeColor("tint", "level1") };

  @media ${ breakpoint("min-width", "laptop") } {
    width: ${ circleSize.desktop.large };
    height: ${ circleSize.desktop.large };
  }
  ${ ({ largeCircle }) =>
    !largeCircle &&
    css`
      width: ${ circleSize.mobile.small };
      height: ${ circleSize.mobile.small };
      margin-top: 4px;
      @media ${ breakpoint("min-width", "laptop") } {
        width: ${ circleSize.desktop.small };
        height: ${ circleSize.desktop.small };
      }
    ` }

`

const TimelineItem = styled.div`
  flex: 1;
  max-width: calc(100% - 40px);
`

const NestedContainer = styled.div<Props>`
  display: flex;
  min-width: 100%;
  margin-left: ${ ({ isNested }) => isNested && "-32px" };
  @media ${ breakpoint("min-width", "laptop") } {
    margin-left: ${ ({ isNested }) => isNested && "-60px" };
  }

  &:last-child{
    >div:first-child{
      &:after{
        display: ${ ({ isNested }) => isNested && "none" };
      }
    }
  }

`

const TimelineContent = styled.div<Props>`
  transition: opacity 0.3s ease-in-out, max-height 0.5s ease-in-out;
  opacity: ${ ({ isOpen }) => (isOpen ? 1 : 0) };
  max-height: ${ ({ isOpen }) => (isOpen ? "1000px" : "0") }; /* Adjust 500px based on your content */
  overflow: hidden;
  padding: ${ ({ isOpen }) => (isOpen ? "16px 0" : "0") };
  position: relative;
`

const TimelineButtonContent = styled.span`
  text-align: left;
  position: relative;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
`

const TimelineButton = styled(Button)<Props>`
  position: relative;
  width: 100%;
  height: initial;
  background-color: transparent;
  padding: ${ themeSpacing(3) } 0;

  &:hover,
  &:focus {
    background-color: transparent;
    outline-color: ${ themeColor("tint", "level4") };

    & + ${ TimelineContent } {
      border: 0;
    }
  }
  span {
    span {
      transform: rotate(${ ({ isOpen }) => (isOpen ? "180deg" : "0deg") });
      transition: transform 0.3s ease;
    }
  }
`

const Background = styled.div<Props>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  // right: 0;
  background-color: ${ ({ isOpen }) => isOpen ? themeColor("tint","level2") : "transparent" };
  pointer-events: none;
  z-index: -1;
`

export { TimelineItem, TimelineButton, TimelineContent, TimelineButtonContent, CircleWrapperStyle, CircleStyle, Background, NestedContainer }
