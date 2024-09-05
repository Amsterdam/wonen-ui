import React from "react"
import { render, screen } from "@testing-library/react"
import dayjs from "dayjs"
import HolidayRentalReports from "../HolidayRentalReports"
import { TITLE } from "../components/ReportsPerYear"
import holidayRentalReportsData from "../../../stories/mockedData/holidayRentalReportsData"

describe("HolidayRentalReports", () => {
  it("No data found", () => {
    render(<HolidayRentalReports data={[]} />)
    expect(screen.getByText("Geen vakantieverhuur meldingen")).toBeInTheDocument()
  })

  it("should load spinner", () => {
    render(<HolidayRentalReports data={[]} loading={true} />)
    expect(screen.getByTestId("spinner")).toBeInTheDocument()
  })

  it("should not load spinner", () => {
    render(<HolidayRentalReports data={[]} loading={false} />)
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument()
  })

  it("should render most recent year", () => {
    render(<HolidayRentalReports data={holidayRentalReportsData} />)
    const rental = holidayRentalReportsData[0]
    expect(
      screen.getByText(`${ TITLE } ${ dayjs(rental.eindDatum).year() }`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${ rental.isVerwijderd ? "Afmelding (-" : "Melding (+"
      }${ rental.nachten } nachten)`
    )).toBeInTheDocument()
  })
})
