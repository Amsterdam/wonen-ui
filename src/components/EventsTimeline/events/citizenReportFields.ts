import { displayDate } from "../../DateDisplay/DateDisplay"

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
  "advertisement_linklist",
  {
    key: "description_citizenreport",
    italic: true
  }
]