import React from "react"
import { render } from "@testing-library/react"
import CaseIdDisplay from "../CaseIdDisplay"

const Wrapper: React.FC<{ id?: string }> = ({ id }) => (
  <div data-testid="case-id-display">
    <CaseIdDisplay id={id} />
  </div>
)

describe("CaseIdDisplay", () => {
  it("should render component empty", () => {
    const { getByTestId } = render(<Wrapper />)
    const caseIdDisplay = getByTestId("case-id-display")
    expect(caseIdDisplay.textContent).toContain("-")
  })

  it("should render component with a 6-digit id", () => {
    const { getByTestId, rerender } = render(<Wrapper id="1234" />)
    const caseIdDisplay = getByTestId("case-id-display")
    expect(caseIdDisplay.textContent).toContain("1234")

    // Rerender with a different id
    rerender(<Wrapper id="567890" />)
    expect(caseIdDisplay.textContent).toContain("567890")
  })
})

