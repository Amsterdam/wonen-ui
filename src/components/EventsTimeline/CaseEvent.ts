type CaseEvent = {
  id: number
  event_values: Record<string, unknown>
  event_variables?: Record<string, unknown>
  date_created: string // date-time
  type: string
  emitter_id: number
  case: number
}
export default CaseEvent