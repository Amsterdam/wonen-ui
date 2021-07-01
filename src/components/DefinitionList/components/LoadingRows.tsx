import SmallSkeleton from "../../Skeleton/SmallSkeleton"
import Definition from "./Definition"

type Props = {
  numRows: number
}

const LoadingRows: React.FC<Props> = ({ numRows }) => <>
  { [...Array(numRows)].map((_, index) =>
    <Definition key={ index } term={ <SmallSkeleton /> } value={ <SmallSkeleton /> } />
  ) }
</>
export default LoadingRows