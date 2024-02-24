import React from "react"
import { render, screen } from "@testing-library/react"
import HolidayRental, { TITLE } from "../HolidayRental"
import holidayRentalData from "../../../stories/mockedData/holidayRentalData"

describe("HolidayRental", () => {
  it("should render Heading", () => {
    render(<HolidayRental data={[]} />)
    expect(screen.getByText(TITLE)).toBeInTheDocument()
  })

  it("should render component with Heading", () => {
    render(<HolidayRental data={[]} />)
    expect(screen.getByRole("heading", { name: TITLE })).toBeInTheDocument()
  })

  it("No data found", () => {
    render(<HolidayRental data={[]} />)
    expect(screen.getByText("Geen vakantieverhuur meldingen")).toBeInTheDocument()
  })

  it("should load spinner", () => {
    const { getByTestId } = render(<HolidayRental data={[]} loading={true} />)
    expect(getByTestId("spinner")).toBeInTheDocument()
  })

  it("should not load spinner", () => {
    const { queryByTestId } = render(<HolidayRental data={[]} loading={false} />)
    expect(queryByTestId("spinner")).not.toBeInTheDocument()
  })

  it("should render most recent year", () => {
    render(<HolidayRental data={holidayRentalData} />)
    const rental = holidayRentalData[0]
    const { is_cancellation, days_count_per_year } = rental.reports[0]
    const nightsRented = days_count_per_year?.[rental.year]
    expect(screen.getByText(`${ TITLE } ${ rental.year }`)).toBeInTheDocument()

    // Search for the text within the parent element
    const textElements = screen.getAllByText(
      `${
        is_cancellation ? "Afmelding (-" : "Melding (+"
      }${ nightsRented } nachten)`
    )
    expect(textElements[0]).toBeInTheDocument()
  })

  it("should not render other years", () => {
    render(
      <HolidayRental data={holidayRentalData} showRecentYearOnly={true} />
    )
    const rental1 = holidayRentalData[1]
    expect(screen.queryByText(`${ TITLE } ${ rental1.year }`)).not.toBeInTheDocument()
  })

  it("should render other years", () => {
    render(
      <HolidayRental data={holidayRentalData} showRecentYearOnly={false} />
    )
    const rental1 = holidayRentalData[1]
    expect(screen.getByText(`${ TITLE } ${ rental1.year }`)).toBeInTheDocument()
  })
})
