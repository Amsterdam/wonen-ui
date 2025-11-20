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

const YEARS_VISIBLE_AFTER_DECEASE = 1

const isRecentDeceased = (resident: ResidentsResponse["personen"][0]) => {
  const raw = resident?.overlijden?.datum?.langFormaat
  if (!raw) return true

  const deceasedDate = dayjs(raw)
  if (!deceasedDate.isValid()) return true

  const cutoff = dayjs().subtract(YEARS_VISIBLE_AFTER_DECEASE, "year")
  return deceasedDate.isSame(cutoff) || deceasedDate.isAfter(cutoff)
}

const getResidents = (data?: ResidentsResponse) => {
  const list = data?.personen || []
  return list.filter(isRecentDeceased)
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
