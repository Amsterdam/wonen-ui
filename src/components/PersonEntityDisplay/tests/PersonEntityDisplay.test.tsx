import React from "react"
import { render } from "@testing-library/react"
import PersonEntityDisplay from "../PersonEntityDisplay"

describe("PersonEntityDisplay", () => {
  it("should render component with entity name and function", () => {
    const { getByText } = render(<PersonEntityDisplay entityName="Foo" personFunction="Bar" />)
    expect(getByText("Bar, Foo")).toBeInTheDocument()
  })
})
