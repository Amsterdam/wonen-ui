import VakantieverhuurReportInformation from "../../components/HolidayRental/VakantieverhuurReportInformation"

const holidayRentalData: VakantieverhuurReportInformation[] = [
  {
    "rented_days_count": 8,
    "planned_days_count": 0,
    "is_rented_today": false,
    "reports": [
      {
        "is_cancellation": false,
        "report_date": "2020-07-21T00:00:00",
        "check_in_date": "2020-07-29T00:00:00",
        "check_out_date": "2020-08-02T00:00:00"
      },
      {
        "is_cancellation": false,
        "report_date": "2020-07-21T00:00:00",
        "check_in_date": "2020-07-24T00:00:00",
        "check_out_date": "2020-07-28T00:00:00"
      }
    ],
    "year": 2020
  },
  {
    "rented_days_count": 17,
    "planned_days_count": 0,
    "is_rented_today": false,
    "reports": [
      {
        "is_cancellation": false,
        "report_date": "2021-01-25T00:00:00",
        "check_in_date": "2021-02-01T00:00:00",
        "check_out_date": "2021-02-18T00:00:00"
      },
      {
        "is_cancellation": true,
        "report_date": "2021-01-25T00:00:00",
        "check_in_date": "2021-01-30T00:00:00",
        "check_out_date": "2021-02-18T00:00:00"
      },
      {
        "is_cancellation": false,
        "report_date": "2021-01-25T00:00:00",
        "check_in_date": "2021-01-30T00:00:00",
        "check_out_date": "2021-02-18T00:00:00"
      }
    ],
    "year": 2021
  }
]

export default holidayRentalData
