import React from "react"
import SmallSkeleton from "./SmallSkeleton"
import Definition from "../DefinitionList/components/Definition"

type Props = {
  numRows: number
}

const LoadingRows: React.FC<Props> = ({ numRows }) => <>
  { [...Array(numRows)].map((_, index) =>
    <Definition key={ index } term={ <SmallSkeleton /> } value={ <SmallSkeleton /> } />
  ) }
</>
export default LoadingRows