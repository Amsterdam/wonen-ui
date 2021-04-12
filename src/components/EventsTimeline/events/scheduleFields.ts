import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v)
  },
  "week_segment",
  "day_segment",
  "priority"
]