import React from "react"
import { Heading, themeSpacing } from "@amsterdam/asc-ui"
import styled from "styled-components"

import SmallSkeleton from "../Helpers/SmallSkeleton"
import LoadingRows from "../Helpers/LoadingRows"
import Definition from "./components/Definition"

type Props = {
  numLoadingRows?: number
  isLoading?: boolean
  title?: React.ReactNode
  values: Record<string, React.ReactNode> | undefined
  headingSize?: React.ComponentProps<typeof Heading>["forwardedAs"]
}

const Dl = styled.dl`
  margin-bottom: ${ themeSpacing(10) };
`

const DefinitionList: React.FC<Props> = ({
  isLoading = false,
  numLoadingRows = 5,
  title,
  values,
  headingSize = "h2"
}) => {

  const rows = Object.entries(values ?? {})

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
          <>
            { rows.map(([term, value]) => <Definition key={ term } term={ term } value={ value } />) }
          </>
        }
      </Dl>
    </div>
  )
}

export default DefinitionList
