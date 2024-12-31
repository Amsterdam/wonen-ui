import React from "react"
import { Spinner } from "@amsterdam/asc-ui"
import type { HolidayRentalRegistration } from "./types"
import Registration from "./components/Registration"
import { Placeholder, LoadingRows } from "../Data/components"

type Props = {
  data: HolidayRentalRegistration[]
  horizontalBordered?: boolean
  loading?: boolean
  loadingRows?: number
}

/**
 *  Detailed overview of Vakantieverhuur registraties.
 */

const HolidayRentalRegistrations: React.FC<Props> = ({
  data,
  horizontalBordered = true,
  loading = false,
  loadingRows
}) => {
  if (loading) {
    return loadingRows ? <LoadingRows numRows={loadingRows} /> : <Spinner />
  }
  return (
    <>
      {data === undefined || data.length === 0 ? (
        <Placeholder>Geen registraties gevonden</Placeholder>
      ) : (
        <>
          {data.map((registration) => (
            <Registration
              key={registration.registrationNumber}
              registration={registration}
              horizontalBordered={horizontalBordered}
            />
          ))}
        </>
      )}
    </>
  )
}

export default HolidayRentalRegistrations
