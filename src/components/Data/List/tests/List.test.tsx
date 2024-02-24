import React from "react"
import { render } from "@testing-library/react"
import List from "../List"


describe("List", () => {
  it("should render NO component with a listitem", () => {
    const { queryByRole } = render(<List data={[]} />)
    expect(queryByRole("list")).toBeNull()
  })

  it("should render component", () => {
    const { getByText } = render(<List data={["Alfa", "Beta", "Gamma"]} />)
    expect(getByText("Alfa")).toBeInTheDocument()
    expect(getByText("Beta")).toBeInTheDocument()
    expect(getByText("Gamma")).toBeInTheDocument()
  })

  it("should render component without a title", () => {
    const { queryByTestId } = render(<List data={[]} />)
    expect(queryByTestId("list")).toBeNull()
  })

  it("should render component with a title", () => {
    const { getByText } = render(<List data={[]} title="Titel" />)
    expect(getByText("Titel")).toBeInTheDocument()
  })
})
