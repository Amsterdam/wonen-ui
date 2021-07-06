import { displayDate } from "../../DateDisplay/DateDisplay"
import DisplayPersonWithRole, { Person } from "../helpers/DisplayPersonWithRole"

export default [
  {
    key: "date_added",
    mapValue: (v: string) => displayDate(v),
    shouldShow: (value: any, isNested: boolean) => !isNested
  },
  "author",
  "type",
  "number_of_accommodations",
  {
    key: "persons",
    mapValue: (v: string | Person ) => {
      if (typeof v === "string") {
        return v
      }
      else {
        return DisplayPersonWithRole(v)
      }
    }
  },
  {
    key: "description",
    italic: true
  }
]
