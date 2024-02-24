import React from "react"
import { render } from "@testing-library/react"
import FinancialDisplay from "../FinancialDisplay"

describe("FinancialDisplay", () => {
  it("should render component with eurosign", () => {
    const { getByText } = render(<FinancialDisplay amount={999} />)
    const euroSign = getByText("€ 999")
    expect(euroSign).toBeInTheDocument()
  })

  it("should render component without cents", () => {
    const { getByText, rerender } = render(<FinancialDisplay amount={1250.45} />)
    const displayedAmount = getByText("€ 1.250")
    expect(displayedAmount).toBeInTheDocument()

    // Rerender with a different amount
    rerender(<FinancialDisplay amount={1250.55} />)
    const updatedDisplayedAmount = getByText("€ 1.251")
    expect(updatedDisplayedAmount).toBeInTheDocument()
  })
})
