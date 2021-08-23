import { Value } from "../Table"

export type Sorter = (a: Value, b: Value) => number

export const sortNumbers = (a: Value, b: Value) => {
  if (typeof b !== "number") return 1
  if (typeof a !== "number") return -1
  return a - b
}

export const sortStrings = (a: Value, b: Value) => {
  if (typeof b !== "string") return 1
  if (typeof a !== "string") return -1
  return a.localeCompare(b)
}

export const sortDates = (a: Value, b: Value) => {
  if (typeof b !== "string") return 1
  if (typeof a !== "string") return -1
  return new Date(a).getTime() - new Date(b).getTime()
}
