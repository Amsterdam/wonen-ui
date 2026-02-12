import React from "react"
import { render } from "@testing-library/react"
import ResidentsHeader from "../ResidentsHeader"

describe("ResidentsHeader", () => {
  it("should render specific title", () => {
    const { getByText } = render(<ResidentsHeader residents={undefined} />)
    expect(getByText("Actueel ingeschreven personen")).toBeInTheDocument()
  })

  it("should render title with 0 residents", () => {
    const { getByText, rerender } = render(
      <ResidentsHeader residents={undefined} />
    )
    expect(getByText("Actueel ingeschreven personen")).toBeInTheDocument()
    rerender(<ResidentsHeader residents={[]} />)
    expect(getByText("Actueel ingeschreven personen (0)")).toBeInTheDocument()
  })

  it("should render title with 2 residents", () => {
    const { getByText } = render(
      <ResidentsHeader residents={[{}, {}]} />
    )
    expect(
      getByText("Actueel ingeschreven personen (2)")
    ).toBeInTheDocument()
  })

  it("should render title with deceased residents", () => {
    const { getByText } = render(
      <ResidentsHeader
        residents={[{}, {}, {}, { overlijden: { datum: { langFormaat: "x" } } }]}
      />
    )
    expect(
      getByText("Actueel ingeschreven personen (3)")
    ).toBeInTheDocument()
  })
})
