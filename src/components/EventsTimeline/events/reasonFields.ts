import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "start_date",
    mapValue: (v: string) => displayDate(v)
  },
  "author",
  "reason",
  "advertisement_linklist",
  {
    key: "description",
    italic: true
  }
]