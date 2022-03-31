import { displayDate } from "../../DateDisplay/DateDisplay"
import { booleanObj } from "../helpers/dictionaries"

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
    key: "housing_corporation_combiteam",
    mapValue: (v: keyof typeof booleanObj) => booleanObj[v]
  },
  {
    key: "description",
    italic: true
  }
]