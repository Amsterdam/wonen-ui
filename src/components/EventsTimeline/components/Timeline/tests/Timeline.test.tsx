import React from "react"
import { render } from "@testing-library/react"
import Timeline from "../Timeline"

describe("Timeline", () => {
  it("should render component with the right title", () => {
    const { getByText } = render(<Timeline title="Titel" />)
    expect(getByText("Titel")).toBeInTheDocument()
  })
})
