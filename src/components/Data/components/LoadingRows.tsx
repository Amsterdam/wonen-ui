import React from "react"
import RepeatChildren from "./RepeatChildren"
import SmallSkeleton from "./SmallSkeleton"
import Definition from "../DefinitionList/components/Definition"

type Props = {
  numRows: number
}

const LoadingRows: React.FC<Props> = ({ numRows }) =>
  <RepeatChildren times={ numRows }>
    <Definition term={ <SmallSkeleton /> } value={ <SmallSkeleton /> } />
  </RepeatChildren>

export default LoadingRows