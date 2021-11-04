import { displayDate } from "../../DateDisplay/DateDisplay"
import { nuisance } from "../helpers/dictionaries"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v),
    shouldShow: (value: any, isNested: boolean) => !isNested
  },
  "author",
  "identification",
  "reporter_name",
  "reporter_phone",
  "reporter_email",
  "advertisement_linklist",
  {
    key: "description_citizenreport",
    italic: true
  },
  {
    key: "nuisance",
    mapValue: (v: keyof typeof nuisance) => nuisance[v]
  }
]