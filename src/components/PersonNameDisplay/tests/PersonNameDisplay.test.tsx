import React from "react"
import { render } from "@testing-library/react"
import PersonNameDisplay from "../PersonNameDisplay"

describe("PersonNameDisplay", () => {
  it("should render component with first- and lastname", () => {
    const { getByText } = render(<PersonNameDisplay sex="V" firstName="A." name="Beecee" />)
    expect(getByText("Mvr. A. Beecee")).toBeInTheDocument()
  })

  it("should render component with first- and lastname and prefix", () => {
    const { getByText, rerender } = render(<PersonNameDisplay sex="M" firstName="J." name="Doe" />)
    expect(getByText("Dhr. J. Doe")).toBeInTheDocument()
    rerender(<PersonNameDisplay sex="V" firstName="A." name="Beecee" namePrefix="van" />)
    expect(getByText("Mvr. A. van Beecee")).toBeInTheDocument()
  })
})
