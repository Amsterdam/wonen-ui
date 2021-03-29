declare namespace Components {
    namespace Schemas {

        export type TypeEnum = "DEBRIEFING" | "VISIT" | "CASE" | "SUMMON" | "GENERIC_TASK";

        export type CaseEvent = {
            readonly id: number
            event_values: {
                [name: string]: any
            }
            readonly date_created: string // date-time
            type: TypeEnum
            emitter_id: number
            case: number
        }

        export type TimelineEventItem = {
            type: string
            caseEvents: Components.Schemas.CaseEvent[]
          }
    }
}
