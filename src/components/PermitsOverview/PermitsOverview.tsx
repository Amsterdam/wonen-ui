import React from "react"
import { Spinner, Heading, Paragraph } from "@amsterdam/asc-ui"
import type Permit from "./Permit"
import PermitDetails from "./components/PermitDetails"
import useKnownPermits from "./hooks/useKnownPermits"

export type Props = {
  permits: Permit[]
  loading: boolean
  showKnown: boolean
  hasRowsSeperated: boolean
}

/**
 *  Detailed overview of permits
 */

const PermitsOverview: React.FC<Props> = ({
  permits, loading = false, showKnown = true, hasRowsSeperated = true
}) => {
  const knownPermits = useKnownPermits(permits)
  const filteredPermits = showKnown ? knownPermits : permits

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      { filteredPermits === undefined ? (
          <>
            <Heading forwardedAs="h4">Vergunningen</Heading>
            <Paragraph>Geen vergunningen gevonden</Paragraph>
          </>
        ) : (
          <div>
            { filteredPermits.map(permit => (
                <PermitDetails
                  key={ permit.permit_type }
                  permit={ permit }
                  hasRowsSeperated={ hasRowsSeperated }
                />
              )
            )}
          </div>
        )
      }
    </>
  )
}

export default PermitsOverview
