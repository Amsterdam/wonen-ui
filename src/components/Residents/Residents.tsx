import React from "react"
import dayjs from "dayjs"
import ResidentsType from "./ResidentsType"
import ResidentsHeader from "./ResidentsHeader"
import ResidentsView from "./ResidentsView"

type Props = {
  data?: ResidentsType
  loading?: boolean
  header?: boolean
}

const NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE = 1

// Filter residents for deceased persons lon ago.
const getResidents = (data?: ResidentsType) => {
  let residents = data?._embedded?.ingeschrevenpersonen

  if (residents?.length >= 0) {
    residents = residents.filter((resident: any) => {
      const deceased = resident?.overlijden?.datum?.datum
      if (deceased) {
        const deceasedDate = dayjs(deceased)
        const dateDeceasedPersonIsVisible = dayjs().subtract(NUMBER_OF_YEARS_DECEASED_PERSON_IS_VISIBLE, "year")
        const isDeceasedPersonVisible = deceasedDate.isAfter(dateDeceasedPersonIsVisible) || deceasedDate.isSame(dateDeceasedPersonIsVisible)
        return isDeceasedPersonVisible
      }
      return true
    })
  }
  return residents
}

const Residents: React.FC<Props> = ({ data, loading = false, header = false }) => {

  const residents = getResidents(data)

  return (
    <>
      { header && <ResidentsHeader residents={ residents } /> }
      <ResidentsView residents={ residents } loading={ loading } />
    </>
  )
}

export default Residents
