import React from "react"
import { Spinner, Paragraph } from "@amsterdam/asc-ui"
import type Permit from "./Permit"
import PermitDetails from "./components/PermitDetails"
import useKnownPermits from "./hooks/useKnownPermits"

export type Props = {
  permits: Permit[]
  loading?: boolean
  showUnknown?: boolean
  horizontalBordered?: boolean
}

/**
 *  Detailed overview of permits.
 *  Based on the Swagger definition of `Permit` in the AZA API.
 */

const PermitsOverview: React.FC<Props> = ({
  permits, loading = false, showUnknown = false, horizontalBordered = true
}) => {
  const knownPermits = useKnownPermits(permits)
  const filteredPermits = showUnknown ? permits : knownPermits

  if (loading) {
    return <Spinner data-testid="spinner" />
  }
  return (
    <>
      { filteredPermits === undefined || filteredPermits.length === 0 ? (
        <Paragraph>Geen vergunningen gevonden</Paragraph>
      ) : (
        <div>
          { filteredPermits.map(permit => (
            <PermitDetails
              key={ permit.permit_type }
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

export default PermitsOverview
