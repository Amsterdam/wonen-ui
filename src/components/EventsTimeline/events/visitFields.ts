import { displayDate, displayTime } from "../../DateDisplay/DateDisplay"
import { visitLabelsMap, visitEventValuesMap, visit_go_ahead } from "../helpers/dictionaries"

const mapValue = (v: keyof typeof visitEventValuesMap) => 
  visitEventValuesMap[v] ?? v.toLocaleLowerCase().charAt(0).toUpperCase() + v.replace(/_/g, " ").slice(1)

export default [
  {
    key: "start_time",
    label: visitLabelsMap["date"],
    mapValue: (v: string) => displayDate(v, true),
    shouldShow: (value: any, isNested: boolean) => !isNested
  },
  {
    key: "start_time",
    mapValue: (v: string) => displayTime(v, true)
  },
  "authors",
  {
    key: "situation",
    mapValue
  },
  {
    key: "notes",
    italic: true
  },
  {
    key: "observations",
    mapValue
  },
  {
    key: "suggest_next_visit",
    mapValue
  },
  {
    key: "suggest_next_visit_description",
    italic: true
  },
  {
    key: "can_next_visit_go_ahead",
    mapValue: (v: keyof typeof visit_go_ahead) => visit_go_ahead[v]
  },
  {
    key: "can_next_visit_go_ahead_description",
    italic: true
  }
]