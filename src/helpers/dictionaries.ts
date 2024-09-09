export const personRoleMap = {
  "PERSON_ROLE_OWNER": "Eigenaar",
  "PERSON_ROLE_RESIDENT": "Bewoner",
  "PERSON_ROLE_MIDDLEMAN": "Tussenpersoon",
  "PERSON_ROLE_PLATFORM": "Platform",
  "PERSON_ROLE_HEIR": "Erfgenaam",
  "PERSON_ROLE_LANDLORD": "Verhuurder"
}

export type PersonRole = keyof typeof personRoleMap