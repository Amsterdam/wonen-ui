import React from "react"
import { Heading } from "@amsterdam/asc-ui"
import styled from "styled-components"

import SmallSkeleton from "../../Helpers/SmallSkeleton"
import LoadingRows from "../../Helpers/LoadingRows"
import Definition from "./components/Definition"

type Props = {
  numLoadingRows?: number
  isLoading?: boolean
  title?: React.ReactNode
  headingSize?: React.ComponentProps<typeof Heading>["forwardedAs"]
  data: Record<string, React.ReactNode> | undefined
  noValuesPlaceholder?: React.ReactNode
  hasRowsSeperated?: boolean
}

const Dl = styled.dl`
  margin: 0;
`

const DefinitionList: React.FC<Props> = ({
  isLoading = false,
  numLoadingRows = 5,
  title,
  headingSize = "h2",
  data,
  noValuesPlaceholder,
  hasRowsSeperated = true
}) => {

  const rows = Object.entries(data ?? {})

  return (
    <div>
      { title &&
        <Heading forwardedAs={ headingSize }>
          { isLoading ? <SmallSkeleton height={10} /> : title }
        </Heading>
      }
      <Dl>
        { isLoading ?
            <LoadingRows numRows={ numLoadingRows } /> :
          data === undefined && noValuesPlaceholder !== undefined ?
            <>{ noValuesPlaceholder }</> :
            <>{ rows.map(([term, value]) => <Definition key={ term } term={ term } value={ value } hasRowsSeperated={ hasRowsSeperated } />) }</>
        }
      </Dl>
    </div>
  )
}

export default DefinitionList
