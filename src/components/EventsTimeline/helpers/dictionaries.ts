// Events
export const caseTypesMap = {
  "CASE": "Aanleiding",
  "CASE_CLOSE": "Zaak afgerond",
  "SCHEDULE": "Bezoek ingepland",
  "DEBRIEFING": "Debrief",
  "SUMMON": "Aanschrijving",
  "VISIT": "Bezoek",
  "DECISION": "Besluit",
  "CITIZEN_REPORT": "Melding"
}

// REASON
export const reasonLabelsMap = {
  "start_date": "Datum",
  "author": "Projectmedewerker",
  "reason": "Aanleiding",
  "project": "Project",
  "advertisement_linklist": "Advertenties",
  "description": "Toelichting",
  "subjects": "Onderwerp(en)",
  "mma_number": "MMA-nummer",
  "previous_case": "Overgedragen zaak"
}

// CASE_CLOSE
export const caseCloseLabelsMap = {
  "date_added": "Datum",
  "author": "Projectmedewerker",
  "reason": "Reden",
  "result": "Resultaat",
  "description": "Toelichting"
}

// SCHEDULE
export const scheduleLabelsMap = {
  "date_added": "Datum",
  "week_segment": "Weekdeel",
  "day_segment": "Dagdeel",
  "priority": "Urgentie",
  "author": "Projectmedewerker",
  "description": "Toelichting",
  "visit_from_datetime": "Huisbezoek vanaf"
}

// DEBRIEF
export const debriefLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "violation": "Uitkomst",
  "feedback": "Terugkoppeling",
  "theme": "Thema"
}

export const debriefViolationMap = {
  "YES": "Overtreding",
  "NO": "Geen overtreding",
  "ADDITIONAL_RESEARCH_REQUIRED": "Nader intern onderzoek nodig",
  "ADDITIONAL_VISIT_REQUIRED": "Aanvullend bezoek nodig",
  "SEND_TO_OTHER_THEME": "Naar ander thema",
  "ADDITIONAL_VISIT_WITH_AUTHORIZATION": "Machtiging benodigd",
  "LIKELY_INHABITED": "Vermoeden bewoning/leegstand"
}

// SUMMON
export const summonLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "persons": "Aangeschrevene(n)",
  "description": "Toelichting",
  "type": "Aanschrijving",
  "number_of_accommodations": "Aantal gesloten logiesverblijven"
}

// DECISION
export const decisionLabelsMap = {
  "date_added": "Datum",
  "author": "Projecthandhaver",
  "persons": "Aangeschrevene(n)",
  "description": "Toelichting",
  "type": "Besluit",
  "sanction_amount": "Bedrag",
  "sanction_id": "Invorderingskenmerk"
}

// CITIZENREPORT
export const citizenReportLabelsMap = {
  "date_added": "Datum",
  "author": "Projectmedewerker",
  "identification": "SIA-nummer",
  "reporter_name": "Naam melder",
  "reporter_phone": "Telefoonnummer melder",
  "reporter_email": "E-mailadres melder",
  "description_citizenreport": "Samenvatting melding",
  "advertisement_linklist": "Advertenties",
  "nuisance": "Melding overlast"
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

export const nuisance = {
  "true": "Ja",
  "false": "Nee"
}

