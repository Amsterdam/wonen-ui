import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "start_date",
    mapValue: (v: string) => displayDate(v)
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
  "previous_case"
]