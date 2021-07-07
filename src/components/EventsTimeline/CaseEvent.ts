type CaseEvent = {
  id: number
  event_values: {
    variables?: Record<string, unknown>
    [name: string]: unknown
  }
  date_created: string // date-time
  type: string
  emitter_id: number
  case: number
}
export default CaseEvent