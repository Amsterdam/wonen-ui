export const personRoleMap = {
  "PERSON_ROLE_OWNER": "Eigenaar",
  "PERSON_ROLE_RESIDENT": "Bewoner",
  "PERSON_ROLE_MIDDLEMAN": "Tussenpersoon",
  "PERSON_ROLE_PLATFORM": "Platform"
}

export type PersonRole = keyof typeof personRoleMap