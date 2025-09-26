import React from "react"
import dayjs from "dayjs"
import type { ResidentsResponse }  from "./types"
import ResidentsHeader from "./ResidentsHeader"
import ResidentsView from "./ResidentsView"

type Props = {
  data?: ResidentsResponse
  header?: boolean
  loading?: boolean
  loadingRows?: number
}

const NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE = 1

// Filter residents for deceased persons lon ago.
const getResidents = (data?: ResidentsResponse) => {
  let residents = data?.personen || []

  if (residents?.length >= 0) {
    residents = residents.filter((resident: any) => {
      const deceased = resident?.overlijden?.datum?.datum
      if (deceased) {
        const deceasedDate = dayjs(deceased)
        const dateDeceasedPersonIsVisible = dayjs().subtract(
          NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE,
          "year"
        )
        const isDeceasedPersonVisible =
          deceasedDate.isAfter(dateDeceasedPersonIsVisible) ||
          deceasedDate.isSame(dateDeceasedPersonIsVisible)
        return isDeceasedPersonVisible
      }
      return true
    })
  }
  return residents
}

const Residents: React.FC<Props> = ({
  data,
  loading = false,
  header = false,
  loadingRows
}) => {
  const residents = getResidents(data)

  return (
    <>
      {header && <ResidentsHeader residents={residents} />}
      <ResidentsView
        residents={residents}
        loading={loading}
        loadingRows={loadingRows}
      />
    </>
  )
}

export default Residents
