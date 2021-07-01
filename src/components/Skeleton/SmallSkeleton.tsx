import { useMemo } from "react"
import styled, { keyframes } from "styled-components"
import { themeColor, themeSpacing } from "@amsterdam/asc-ui"

type StyledDivProps = {
  height: number
  width: number
}

const backgroundAnimation = keyframes`
    0% { background-position:40%; }
    50% { background-position:100%; }
    100% { background-position:40%; }
`

const StyledDiv = styled.div<StyledDivProps>`
  height: ${ props => themeSpacing(props.height) };
  width: ${ props => props.width }px;
  max-width: 100%;

  background: linear-gradient(270deg, ${ themeColor("tint", "level3") }, ${ themeColor("tint", "level4") });
  background-size: 400% 400%;

  animation: ${ backgroundAnimation } 4s linear infinite;
`

type Props = {
  height?: number
  maxRandomWidth?: number
}

const SmallSkeleton: React.FC<Props> = ({ maxRandomWidth = 100, height = 5 }) => {
  const width = useMemo(() => Math.round(Math.random() * (maxRandomWidth - 50) ) + 50, [maxRandomWidth])
  return <StyledDiv width={width} height={height} />
}

export default SmallSkeleton
