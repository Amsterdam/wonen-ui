import React from "react"
import { Heading } from "@amsterdam/asc-ui"
import styled from "styled-components"

import SmallSkeleton from "../components/SmallSkeleton"
import LoadingRows from "../components/LoadingRows"
import Definition from "./components/Definition"

type Props = {
  numLoadingRows?: number
  loading?: boolean
  title?: React.ReactNode
  headingSize?: React.ComponentProps<typeof Heading>["forwardedAs"]
  data: Record<string, React.ReactNode> | undefined
  emptyPlaceholder?: React.ReactNode
  hasRowsSeperated?: boolean
}

const Dl = styled.dl`
  margin: 0;
`

const DefinitionList: React.FC<Props> = ({
  loading = false,
  numLoadingRows = 5,
  title,
  headingSize = "h2",
  data,
  emptyPlaceholder,
  hasRowsSeperated = true
}) => {

  const rows = Object.entries(data ?? {})

  return (
    <div>
      { title && (
        <Heading forwardedAs={ headingSize }>
          { loading ? <SmallSkeleton height={10} /> : title }
        </Heading>
      )}
      <Dl>
        { loading ? (
          <LoadingRows numRows={ numLoadingRows } />
        ) : (
          data === undefined && emptyPlaceholder !== undefined) ? (
            <>{ emptyPlaceholder }</>
          ) : (
            <>{ rows.map(([term, value]) => (
              <Definition
                key={ term }
                term={ term }
                value={ value }
                hasRowsSeperated={ hasRowsSeperated }
              />
              ))}
            </>
          )
        }
      </Dl>
    </div>
  )
}

export default DefinitionList
