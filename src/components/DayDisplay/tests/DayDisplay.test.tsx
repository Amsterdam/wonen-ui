import React from "react"
import { render } from "@testing-library/react"
import DayDisplay from "../DayDisplay"

describe("DateDisplay", () => {
  it("should render component with day", () => {
    const { getByText } = render(<DayDisplay date="2021-03-31" />)
    expect(getByText("woensdag")).toBeInTheDocument()
  })

  it("should render component with day capitalized", () => {
    const { getByText } = render(<DayDisplay date="2021-03-31" capitalize={true} />)
    expect(getByText("Woensdag")).toBeInTheDocument()
  })

  it("should render component with error message when no day is given", () => {
    const { getByText } = render(<DayDisplay date="" />)
    expect(getByText("Ongeldige datum")).toBeInTheDocument()
  })
})
