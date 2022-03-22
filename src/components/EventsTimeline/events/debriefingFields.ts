import { displayDate } from "../../DateDisplay/DateDisplay"
import { debriefViolationMap } from "../helpers/dictionaries"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v)
  },
  "author",
  {
    key: "violation",
    mapValue: (v: keyof typeof debriefViolationMap) => debriefViolationMap[v]
  },
  "theme",
  "nuisance_detected",
  {
    key: "feedback",
    italic: true
  }
]