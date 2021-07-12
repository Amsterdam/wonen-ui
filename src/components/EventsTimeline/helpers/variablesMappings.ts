import { variableToField } from "./fields"

type Variable = {
  label: string
  value: unknown
}

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null

const validateVariable = (variable: unknown): variable is Variable =>
  isObject(variable) ? variable.hasOwnProperty("label") && variable.hasOwnProperty("value") : false

const validateVariables = (variables: unknown): variables is Record<string, Variable> =>
  isObject(variables) ? Object.values(variables).every(validateVariable) : false

export const variablesToFields = (variables: unknown) =>
  validateVariables(variables) ?
    Object.entries(variables).map(([key, values]) => variableToField(key, values.label)) :
    undefined

export const variablesToValues = (variables: unknown) =>
  validateVariables(variables) ?
    Object.entries(variables).reduce((acc, [key, values]) => { acc[key] = values.value; return acc }, {} as Record<string, Variable["value"]>) :
    undefined
