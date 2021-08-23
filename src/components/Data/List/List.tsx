import React from "react"
import styled from "styled-components"
import { Heading, themeSpacing } from "@amsterdam/asc-ui"
import RepeatChildren from "../components/RepeatChildren"
import SmallSkeleton from "../components/SmallSkeleton"

type Props = {
  numLoadingRows?: number
  isLoading?: boolean
  title?: React.ReactNode
  headingSize?: React.ComponentProps<typeof Heading>["forwardedAs"]
  data?: React.ReactNode[]
  emptyPlaceholder?: React.ReactNode
}

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 0 0 ${ themeSpacing(1) } 0;
    line-height: 1.15;
  }
`

const List: React.FC<Props> = ({ numLoadingRows = 0, isLoading, title, headingSize = "h2", data, emptyPlaceholder }) => (
  <>
    { title &&
      <Heading forwardedAs={ headingSize }>
        { isLoading ? <SmallSkeleton height={ 10 } /> : title }
      </Heading>
    }
    { isLoading && numLoadingRows > 0 &&
      <Ul>
        <RepeatChildren times={ numLoadingRows }>
          <li><SmallSkeleton /></li>
        </RepeatChildren>
      </Ul>
    }
    { data !== undefined && data.length > 0 ?
      <Ul>
        { data.map((item, index) => <li key={ index }>{ item }</li>) }
      </Ul> :
      emptyPlaceholder
    }
  </>
)

export default List