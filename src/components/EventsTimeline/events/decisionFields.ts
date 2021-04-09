import { displayDate } from "../../DateDisplay/DateDisplay"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v),
    shouldShow: (value: any, isNested: boolean) => !isNested
  },
  "author",
  "type",
  "sanction_amount",
  "persons",
  {
    key: "description",
    italic: true
  }
]