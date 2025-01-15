import React, { ReactNode, useState } from "react"
import styled from "styled-components"
import { Button, Icon } from "@amsterdam/asc-ui"
import { ExpandMore } from "../../Icons"

export type StyleProps = {
  isOpen?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLDivElement>;

export const StyledExpandableButton = styled(Button)<StyleProps>`
  position: relative;
  width: 100%;
  height: initial;
  background-color: transparent;
  padding: 12px 0;
  font-size: 18px;
  &:hover,
  &:focus {
    background-color: transparent;
  }
  span {
    span {
      transform: rotate(${ ({ isOpen }) => (isOpen ? "180deg" : "0deg") });
      transition: transform 0.3s ease;
    }
  }
` 

export const StyledExpandableContent = styled.div<StyleProps>`
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  opacity: ${ ({ isOpen }) => (isOpen ? 1 : 0) };
  max-height: ${ ({ isOpen }) => (isOpen ? "1000px" : "0") }; 
  overflow: hidden;
  position: relative;
`

const StyledDiv = styled.div`
  margin-bottom: 12px;
`

type Props = {
  title: string
  children: ReactNode
  defaultOpen?: boolean 
}

const ExpandableContainer: React.FC<Props> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <StyledDiv>
      <StyledExpandableButton 
        aria-expanded={open}
        isOpen={open}
        type="button"
        variant="blank"
        iconRight={<Icon size={20}><ExpandMore /></Icon>}
        onClick={onClick}
      >
        { title }
      </StyledExpandableButton>
      <StyledExpandableContent isOpen={open}>
        { children }
      </StyledExpandableContent>
    </StyledDiv>    
  )
}

export default ExpandableContainer