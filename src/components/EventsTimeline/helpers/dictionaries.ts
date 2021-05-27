// Events
export const caseTypesMap = {
  "CASE": "Aanleiding",
  "SCHEDULE": "Huisbezoek inplannen",
  "DEBRIEFING": "Debrief",
  "SUMMON": "Aanschrijving",
  "VISIT": "Huisbezoek",
  "DECISION": "Besluit",
  "CITIZEN_REPORT": "Melding"
}

// REASON
export const reasonLabelsMap = {
  "start_date": "Datum",
  "author": "Projectmedewerker",
  "reason": "Aanleiding",
  "identification": "SIA-nummer",
  "reporter_name": "Naam melder",
  "reporter_phone": "Telefoonnummer melder",
  "advertisement_linklist": "Advertenties",
  "description": "Toelichting"
}

// SCHEDULE
export const scheduleLabelsMap = {
  "date_added": "Datum",
  "week_segment": "Weekdeel",
  "day_segment": "Dagdeel",
  "priority": "Urgentie",
  "author": "Projectmedewerker"
}

// DEBRIEF
export const debriefLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "violation": "Overtreding",
  "feedback": "Terugkoppeling"
}

export const debriefViolationMap = {
  "YES": "Ja, overtreding",
  "NO": "Nee, geen overtreding",
  "ADDITIONAL_RESEARCH_REQUIRED": "Nader intern onderzoek nodig",
  "ADDITIONAL_VISIT_REQUIRED": "Aanvullend huisbezoek nodig"
}

// SUMMON
export const summonLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "persons": "Aangeschrevene(n)",
  "description": "Toelichting",
  "type": "Aanschrijving"
}

// DECISION
export const decisionLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "persons": "Aangeschrevene(n)",
  "description": "Toelichting",
  "type": "Besluit",
  "sanction_amount": "Bedrag"
}

// CITIZENREPORT
export const citizenReportLabelsMap = {
  "date_added": "Datum",
  "author": "Projectmedewerker",
  "identification": "SIA-nummer",
  "reporter_name": "Naam melder",
  "reporter_phone": "Telefoonnummer melder",
  "description": "Toelichting",
  "advertisement_linklist": "Advertenties"
}
// GENERIC EVENT
export const genericLabelsMap = {
  "date_added": "Datum",
  "author": "Uitvoerder"
}

// VISIT
export const visitLabelsMap = {
  "date": "Datum",
  "start_time": "Starttijd",
  "authors": "Toezichthouders en handhaver",
  "situation": "Situatie",
  "observations": "Kenmerken",
  "can_next_visit_go_ahead": "Vervolgactie",
  "can_next_visit_go_ahead_description": "Toelichting",
  "suggest_next_visit": "Volgend bezoek",
  "suggest_next_visit_description": "Toelichting",
  "notes": "Toelichting"
}

export const visitEventValuesMap = {
  "malfunctioning_doorbell": "Bel functioneert niet",
  "intercom": "Contact via intercom",
  "hotel_furnished": "Hotelmatig ingericht",
  "vacant": "Leegstaand",
  "likely_inhabited": "Vermoedelijk bewoond",
  "nobody_present": "Niemand aanwezig",
  "no_cooperation": "Geen medewerking",
  "access_granted": "Toegang verleend",
  "daytime": "Overdag",
  "weekend": "Weekend",
  "evening": "'s Avonds",
  "unknown": "Niet meer uitzetten"
}

export const visit_go_ahead = {
  "true": "Ja, doorlaten",
  "false": "Nee, tegenhouden"
}

