import React from "react"

type Props = {
  num: number
}

const RepeatChildren: React.FC<Props> = ({ num = 1, children }) =>
  <>
    { [...Array(num)].map((_, index) =>
        <React.Fragment key={ index }>{ children }</React.Fragment>)
    }
  </>

export default RepeatChildren