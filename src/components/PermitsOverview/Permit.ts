export type PermitGrantedEnum = "GRANTED" | "NOT_GRANTED" | "UNKNOWN";

type Permit = {
  permit_granted: PermitGrantedEnum
  permit_type: string
  raw_data?: {
      [name: string]: any
  } | null
  details?: {
      [name: string]: any
  } | null
}

export default Permit
