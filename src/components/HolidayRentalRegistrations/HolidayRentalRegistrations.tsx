import React from "react"
import Placeholder from "../Data/components/Placeholder"
import type { HolidayRentalRegistration } from "./types"
import Registration from "./components/Registration"
import LoadingRows from "../Data/components/LoadingRows"

type Props = {
  data: HolidayRentalRegistration[]
  loading?: boolean
  horizontalBordered?: boolean
}

/**
 *  Detailed overview of Vakantieverhuur registraties.
 */

const HolidayRentalRegistrations: React.FC<Props> = ({
  data, loading = false, horizontalBordered = true
}) => {

  if (loading) {
    return <LoadingRows numRows={ 6 } />
  }
  return (
    <>
      { data === undefined || data.length === 0 ? (
        <Placeholder>Geen registraties gevonden</Placeholder>
      ) : (
        <>
          { data.map(registration => (
            <Registration
              key={ registration.registrationNumber }
              registration={ registration }
              horizontalBordered={ horizontalBordered }
            />
          )
          )}
        </>
      )}
    </>
  )
}

export default HolidayRentalRegistrations
