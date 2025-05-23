import { displayDate } from "../../DateDisplay/DateDisplay"

const reasonFields = (prefixUrl: string) => (
  [
    {
      key: "start_date",
      mapValue: (v: string) => displayDate(v, true)
    },
    "author",
    "reason",
    "mma_number",
    "subjects",
    "project",
    "advertisement_linklist",
    {
      key: "description",
      italic: true
    },
    {
      key: "previous_case",
      mapValue: (caseId: string) => `${ prefixUrl }${ caseId }`
    }
  ]
)

export default reasonFields
