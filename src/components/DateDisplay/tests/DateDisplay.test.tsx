import React from "react"
import { render } from "@testing-library/react"
import DateDisplay, { isDate } from "../DateDisplay"

describe("isDate", () => {
  it("Date", () => {
    expect(isDate(new Date("2021-03-31"))).toBeTruthy()
  })

  it("string", () => {
    expect(isDate("2021-03-31")).toBeTruthy()
  })

  it("non string", () => {
    expect(isDate(undefined)).toBeFalsy()
    expect(isDate(null)).toBeFalsy()
    expect(isDate(5)).toBeFalsy()
  })
})

describe("DateDisplay", () => {
  it("should render component with month as number", () => {
    const { getByText } = render(<DateDisplay date="2021-03-31" />)
    expect(getByText("31-03-2021")).toBeInTheDocument()
  })

  it("should render component with month as name", () => {
    const { getByText } = render(<DateDisplay date="2021-03-31" full />)
    expect(getByText("Woensdag 31 maart 2021")).toBeInTheDocument()
  })

  it("should render component with empty date message when undefined date is given", () => {
    const { getByText } = render(<DateDisplay date={undefined} emptyText="Geen datum" />)
    expect(getByText("Geen datum")).toBeInTheDocument()
  })

  it("should render component with invalid date message when invalid date is given", () => {
    const { getByText } = render(<DateDisplay date="ongeldig" />)
    expect(getByText("Ongeldige datum")).toBeInTheDocument()
  })
})
