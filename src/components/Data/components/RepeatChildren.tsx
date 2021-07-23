import React from "react"

type Props = {
  times: number
}

const RepeatChildren: React.FC<Props> = ({ times = 1, children }) =>
  <>
    { [...Array(times)].map((_, index) =>
        <React.Fragment key={ index }>{ children }</React.Fragment>)
    }
  </>

export default RepeatChildren