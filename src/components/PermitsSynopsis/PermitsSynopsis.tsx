import React from "react"
import dayjs from "dayjs"
import { Spinner } from "@amsterdam/asc-ui"
import type PermitType from "./PermitType"
import PermitDetails from "./components/PermitDetails"
import { getValidPermits } from "./utils"
import Placeholder from "../Data/components/Placeholder"

export type Props = {
  permits: PermitType[]
  loading?: boolean
  displayOnlyValidPermits?: boolean
  horizontalBordered?: boolean
}

/**
 *  Detailed overview of permits.
 *  Based on the Swagger definition of `Powerbrowser` in the AZA API.
 */

const PermitsSynopsis: React.FC<Props> = ({
  permits = [], loading = false, displayOnlyValidPermits = false, horizontalBordered = true
}) => {
  const validPermits = getValidPermits(permits)
  const filteredPermits = displayOnlyValidPermits ? validPermits : permits
  const sortedPermits = filteredPermits.sort((a, b) => dayjs(b?.startdatum).diff(dayjs(a?.startdatum)))

  if (loading) {
    return <Spinner data-testid="spinner" />
  }
  return (
    <>
      { sortedPermits === undefined || sortedPermits.length === 0 ? (
        <Placeholder>{`Geen ${ permits.length > 0 ? "valide " : "" }vergunningen gevonden`}</Placeholder>
      ) : (
        <div>
          { sortedPermits.map((permit, index) => (
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
