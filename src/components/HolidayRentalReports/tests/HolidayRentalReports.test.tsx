import React from "react"
import { render, screen } from "@testing-library/react"
import moment from "moment"
import HolidayRentalReports from "../HolidayRentalReports"
import { TITLE } from "../components/ReportsPerYear"
import holidayRentalReportsData from "../../../stories/mockedData/holidayRentalReportsData"

describe("HolidayRentalReports", () => {
  it("should render Heading", () => {
    render(<HolidayRentalReports data={[]} />)
    expect(screen.getByText(TITLE)).toBeInTheDocument()
  })

  it("should render component with Heading", () => {
    render(<HolidayRentalReports data={[]} />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
  })

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
      screen.getByText(`${ TITLE } ${ moment(rental.eindDatum).year() }`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${ rental.isVerwijderd ? "Afmelding (-" : "Melding (+"
      }${ rental.nachten } nachten)`
    )).toBeInTheDocument()
  })
})
