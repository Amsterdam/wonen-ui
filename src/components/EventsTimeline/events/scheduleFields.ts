import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v)
  },
  "author",
  "week_segment",
  "day_segment",
  "priority",
  {
    key: "description",
    italic: true
  }
]