import CaseEvent from "../../components/EventsTimeline/CaseEvent"

const eventsTimelineData: CaseEvent[] = [
  {
    id: 2264,
    event_values: {
      start_date: "2021-03-17",
      end_date: null,
      reason: "Project",
      project: "Levant",
      description: "19:31",
      author: "A. Beecee",
      identification: 123456,
      advertisement_linklist: [],
      subjects:["Hennep", "Overige woonfraude"]
    },
    date_created: "2021-03-17T19:31:11+0100",
    type: "CASE",
    emitter_id: 3394,
    case: 3394
  },
  {
    id: 3956,
    event_values: {
      date_added: "2021-05-18T09:52:03.154320Z",
      identification: 123456,
      reporter_name: "Donald Duck",
      reporter_phone: "1234567890",
      reporter_email: "mail@mail.com",
      advertisement_linklist: [
        "http://www.example.com",
        "http://www.example.com"
      ],
      description_citizenreport: "Korte toelichting..",
      author: "Adam",
      nuisance: false
    },
    date_created: "2021-05-18T11:52:03+0200",
    type: "CITIZEN_REPORT",
    emitter_id: 1,
    case: 3766
	},
  {
    id: 4040,
    event_values: {
      date_added: "2021-05-20T12:31:45.232760Z",
      action: "Bezoek",
      week_segment: "Doordeweeks",
      day_segment: "Overdag",
      priority: "Normaal",
      author: "Adam",
      description: "Toelichting"
    },
    date_created: "2021-05-20T14:31:45+0200",
    type: "SCHEDULE",
    emitter_id: 219,
    case: 3785
	},
  {
    id: 227,
    event_values: {
      start_time: "2021-01-01T11:34:00Z",
      authors: [
        "Alice",
        "Bob"
      ],
      situation: "access_denied",
      observations: [],
      can_next_visit_go_ahead: true,
      can_next_visit_go_ahead_description: null,
      suggest_next_visit: null,
      suggest_next_visit_description: null
    },
    date_created: "2021-04-08T11:25:07+0200",
    type: "VISIT",
    emitter_id: 81,
    case: 3394
  },
  {
    id: 228,
    event_values: {
      start_time: "2021-01-02T11:34:00Z",
      authors: [
        "Adam",
        "Eva"
      ],
      situation: "access_granted",
      observations: [],
      can_next_visit_go_ahead: true,
      can_next_visit_go_ahead_description: null,
      suggest_next_visit: null,
      suggest_next_visit_description: null
    },
    date_created: "2021-04-08T11:25:07+0200",
    type: "VISIT",
    emitter_id: 81,
    case: 3394
  },
  {
    id: 2533,
    event_values: {
      author: "A. Beecee",
      date_added: "2021-03-27T19:19:26.345631Z",
      violation: "ADDITIONAL_VISIT_WITH_AUTHORIZATION",
      feedback: "Hier de opmerkingen..."
    },
    date_created: "2021-03-26T20:19:26+0100",
    emitter_id: 317,
    case: 3394,
    type: "DEBRIEFING"
	},
  {
    id: 222,
    event_values: {
      author: "A. Beecee",
      date_added: "2021-04-08T08:56:54.371354Z",
      persons: ["Donald Duck"],
      description: "Toelichting",
      type: "Boete",
      sanction_amount: 45678,
      sanction_id: "AZA30-4"
    },
    date_created: "2021-04-08T10:56:54+0200",
    type: "DECISION",
    emitter_id: 3394,
    case: 3394
	},
	{
    case: 3898,
    date_created: "2021-06-22T12:05:11+0200",
    event_values: {
      author: "Adam",
      date_added: "2021-06-22T10:05:11.364215Z",
      description: "Korte toelichting..",
      number_of_accommodations: 6,
      persons: [{ first_name: "Donald", last_name: "Duck", person_role: "PERSON_ROLE_OWNER" }],
      type: "Sluiting"
    },
    emitter_id: 213,
    id: 4883,
    type: "SUMMON"
  },
  {
    case: 3898,
    date_created: "2021-06-22T12:05:11+0200",
    event_values: {
      author: "Adam",
      date_added: "2021-06-22T10:05:11.364215Z",
      description: "Korte toelichting..",
      number_of_accommodations: 6,
      persons: [{ first_name: "Katrien", last_name: "Duck", person_role: "PERSON_ROLE_RESIDENT" }],
      type: "Sluiting"
    },
    emitter_id: 213,
    id: 4884,
    type: "SUMMON"
  },
  {
    id: 2221,
    event_values: {
      author: "A. Beecee",
      date_added: "2021-04-08T08:56:54.371354Z",
      description: "Toelichting",
      reason: "Reden..",
      result: "Resultaat.."
    },
    date_created: "2021-04-08T10:56:54+0200",
    type: "CASE_CLOSE",
    emitter_id: 3394,
    case: 3394
  },

  {
    id: 4039,
    event_values: {
      date_added: "2021-05-20T12:31:45.232760Z",
      action: "Bezoek",
      week_segment: "Doordeweeks",
      day_segment: "Overdag",
      priority: "Normaal",
      author: "Adam",
      description: "Toelichting"
    },
    date_created: "2021-05-20T14:31:45+0200",
    type: "SCHEDULE",
    emitter_id: 219,
    case: 3785
	},
  {
    id: 439,
    event_values: {
      author: "Local User",
      date_added: "2021-05-11T12:54:04.349717Z",
      description: "Dynamisch formulier 1"
    },
    event_variables: {
      field_1: {
        label: "Dit is het label",
        value: "Eerste veld"
      },
      field_2: {
        label: "Dit is het label voor een boolean",
        value: true
      },
      field_3: {
        label: "Label Enum",
        value: "waarde_2"
      }
    },
    date_created: "2021-05-11T14:54:04+0200",
    type: "GENERIC_TASK",
    emitter_id: 137,
    case: 90
	},
  {
    id: 2539,
    event_values: {
      author: "A. Beecee",
      date_added: "2021-03-27T19:19:26.345631Z",
      violation: "YES",
      feedback: "Hier de opmerkingen..."
    },
    date_created: "2021-03-26T20:19:26+0100",
    emitter_id: 317,
    case: 3394,
    type: "DEBRIEFING"
  },
  {
    id: 437,
    event_values: {
      author: "Local User",
      date_added: "2021-05-11T12:54:04.349717Z",
      description: "Dynamisch formulier 1"
    },
    event_variables: {
      field_1: {
        label: "Dit is het label",
        value: "Eerste veld"
      },
      field_2: {
        label: "Dit is het label voor een boolean",
        value: false
      },
      field_3: {
        label: "Label Enum",
        value: "waarde_2"
      }
    },
    date_created: "2021-05-11T14:54:04+0200",
    type: "GENERIC_TASK",
    emitter_id: 137,
    case: 90
  }
]

export default eventsTimelineData