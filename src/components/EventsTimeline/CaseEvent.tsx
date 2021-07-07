type CaseEvent = {
	id: number
	event_values: {
    [name: string]: any
	}
	date_created: string // date-time
	type: string
	emitter_id: number
	case: number
}
export default CaseEvent