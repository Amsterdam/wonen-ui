export type VakantieverhuurReport = {
  is_cancellation: boolean
  report_date: string // date-time
  check_in_date: string // date-time
  check_out_date: string // date-time
  days_count_per_year: {
    [key: string]: number
  }
}

export type VakantieverhuurReportInformation = {
  year: number
  rented_days_count: number | null
  planned_days_count: number | null
  is_rented_today: boolean
  reports: VakantieverhuurReport[]
}

export default VakantieverhuurReportInformation
