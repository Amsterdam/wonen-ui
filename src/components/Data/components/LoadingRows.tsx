import React from "react"
import RepeatChildren from "./RepeatChildren"
import SmallSkeleton from "./SmallSkeleton"
import Definition from "../DefinitionList/components/Definition"

type Props = {
  loading?: boolean
  numRows?: number
}

export const LoadingRows: React.FC<Props> = ({ loading = true, numRows = 1 }) => loading ? (
  <RepeatChildren times={ numRows }>
    <Definition term={ <SmallSkeleton /> } value={ <SmallSkeleton /> } />
  </RepeatChildren>
) : <></>

export default LoadingRows
