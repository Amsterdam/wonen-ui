import React from "react"
import { Spinner, Paragraph } from "@amsterdam/asc-ui"
import type PermitType from "./PermitType"
import PermitDetails from "./components/PermitDetails"
import usePermitsWithResults from "./hooks/usePermitsWithResults"

export type Props = {
  permits: PermitType[]
  loading?: boolean
  showOnlyResults?: boolean
  horizontalBordered?: boolean
}

/**
 *  Detailed overview of permits.
 *  Based on the Swagger definition of `Powerbrowser` in the AZA API.
 */

const PermitsSynopsis: React.FC<Props> = ({
  permits, loading = false, showOnlyResults = false, horizontalBordered = true
}) => {
  const permitsWithResults = usePermitsWithResults(permits)
  const filteredPermits = showOnlyResults ? permitsWithResults : permits

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      { filteredPermits === undefined || filteredPermits.length === 0 ? (
        <Paragraph>Geen vergunningen gevonden</Paragraph>
      ) : (
        <div>
          { filteredPermits.map((permit, index) => (
            <PermitDetails
              key={ `${ permit.muT_DAT }${ index }` }
              permit={ permit }
              horizontalBordered={ horizontalBordered }
            />
          )
          )}
        </div>
      )}
    </>
  )
}

export default PermitsSynopsis
