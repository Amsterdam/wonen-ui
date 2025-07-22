import React from "react"
import { render } from "@testing-library/react"
import DefinitionList from "../DefinitionList"


describe("DefinitionList", () => {
  it("should render NO component with a definition", () => {
    const { queryByTestId } = render(<DefinitionList data={{}} />)
    expect(queryByTestId("definition")).toBeNull()
  })

  it("should render component with a Definition", () => {
    const { getByText } = render(
      <DefinitionList data={{ "label A": "value A", "label B": "value B" }} />
    )
    expect(getByText("label A")).toBeInTheDocument()
    expect(getByText("Value A")).toBeInTheDocument()
    expect(getByText("label B")).toBeInTheDocument()
    expect(getByText("Value B")).toBeInTheDocument()
  })

  it("should render component without a title", () => {
    const { queryByTestId } = render(<DefinitionList data={{}} />)
    expect(queryByTestId("title")).toBeNull()
  })

  it("should render component with a title", () => {
    const { getByText } = render(<DefinitionList title="Titel" data={{}} />)
    expect(getByText("Titel")).toBeInTheDocument()
  })
})
