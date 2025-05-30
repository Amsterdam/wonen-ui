import React, { useCallback, useEffect, useState } from "react"
import { useUID } from "react-uid"
import { Icon } from "@amsterdam/asc-ui"
import { Theme } from "@amsterdam/asc-ui/es/types/Theme"
import { ButtonVariant } from "@amsterdam/asc-ui/lib/components/Button/Button"
import { Check, ExpandMore } from "../../../Icons"

import {
  TimelineItem,
  TimelineButton,
  TimelineButtonContent,
  TimelineContent,
  CircleWrapperStyle,
  CircleStyle,
  Background,
  NestedContainer,
  Props as StyleProps
} from "./TimelineStyle"

type Props = {
  onToggle?: (open: boolean) => void
  hasTransparentBackground?: boolean
} & StyleProps

type ButtonStyleProps = {
  /**
   * @deprecated Use variant instead. Pass the theme-color.
   */
  color?: Theme.ColorType
  /**
   * @deprecated Use size to create a button with equal width and height
   */
  square?: boolean
  /**
   * Set an equal height and width
   */
  size?: number
  /**
   * A variant, usually different background-color and color of a button
   */
  variant?: ButtonVariant
  /**
   * Add narrow arrow on the right side of the secondary button
   */
  taskflow?: boolean
}

const Timeline: React.FC<
  Props &
  ButtonStyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  children,
  title,
  id: idProp,
  isOpen,
  onToggle,
  largeCircle = true,
  onClick,
  isNested,
  hasTransparentBackground = false,
  ...otherProps

}) => {
  const uid = useUID()
  const id = idProp || uid
  const [open, setOpen] = useState(isOpen ?? false)

  useEffect(() => {
    setOpen(isOpen ?? false)
  }, [isOpen, setOpen])

  const handleClick = useCallback(() => {
    const newOpenState = !open
    if (onToggle) {
      onToggle(newOpenState)
    }
    setOpen(newOpenState)
  }, [open, onToggle])

  return (
    <>
      { !hasTransparentBackground && <Background isOpen={open} /> }
      <NestedContainer isNested={isNested}>
        <CircleWrapperStyle isOpen={open} isNested={isNested} >
          <CircleStyle
            size={13}
            {...{ largeCircle }}
          >
            <Icon size={16} color="white"><Check /></Icon>
          </CircleStyle>
        </CircleWrapperStyle>
        <TimelineItem>
          <TimelineButton
            aria-controls={id}
            aria-expanded={open}
            id={`label-${ id }`}
            type="button"
            variant="blank"
            iconRight={<Icon size={20}><ExpandMore /></Icon>}
            isOpen={open}
            title={title}
            onClick={handleClick}
            {...otherProps}
          >
            <TimelineButtonContent>
              {title}
            </TimelineButtonContent>
          </TimelineButton>
          <TimelineContent isOpen={open} aria-labelledby={`label-${ id }`} id={id} isNested={isNested}>
            {children}
          </TimelineContent>
        </TimelineItem>
      </NestedContainer>
    </>
  )
}

export default Timeline
