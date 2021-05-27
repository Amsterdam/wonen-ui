import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "start_date",
    mapValue: (v: string) => displayDate(v)
  },
  "author",
  "reason",
  "identification",
  "reporter_name",
  "reporter_phone",
  "advertisement_linklist",
  {
    key: "description",
    italic: true
  }
]