import React from "react"
import { render } from "@testing-library/react"
import TextWithLinebreaks from "../TextWithLinebreaks"

describe("TextWithLinebreaks", () => {
  it("should render a term", () => {
    const { getByText } = render(<TextWithLinebreaks>Value</TextWithLinebreaks>)
    const termElement = getByText("Value")
    expect(termElement).toBeInTheDocument()
  })
})
