import React from "react"
import { render } from "@testing-library/react"
import Definition from "../components/Definition"

describe("DefinitionList", () => {
  it("should render a term", () => {
    const { getByText } = render(<Definition term="Label" value="Value" />)
    expect(getByText("Label")).toBeInTheDocument()
  })

  it("should render a value", () => {
    const { getByTestId } = render(<Definition term="Label" value="Value" />)
    expect(getByTestId("definition")).toBeInTheDocument()
  })
})
