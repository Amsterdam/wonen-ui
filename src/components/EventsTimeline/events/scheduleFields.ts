import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v)
  },
  "author",
  "week_segment",
  "day_segment",
  {
    key: "visit_from_datetime",
    mapValue: (v: string) => displayDate(v)
  },
  "priority",
  {
    key: "description",
    italic: true
  }
]