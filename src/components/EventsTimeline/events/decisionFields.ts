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
  {
    key: "sanction_amount",
    isCurrency: true
  },
  "sanction_id",
  {
    key: "persons",
    mapValue: (v: string | Person ) => 
       typeof v === "string" ? v : v !== undefined ? DisplayPersonWithRole(v) : "-"
  },
  {
    key: "description",
    italic: true
  }
]