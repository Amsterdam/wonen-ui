import React from "react"
import { render, screen } from "@testing-library/react"
import PermitsSynopsis from "../PermitsSynopsis"
import PermitsSynopsisData from "../../../stories/mockedData/PermitsSynopsisData"

describe("PermitsSynopsis", () => {
  it("should render component with Heading and Paragraph", () => {
    const { getByText } = render(<PermitsSynopsis permits={[]} />)
    const paragraphElement = getByText(/Geen vergunningen gevonden/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it("should load spinner", () => {
    const { getByTestId } = render(<PermitsSynopsis permits={[]} loading={true} />)
    const spinnerElement = getByTestId("spinner")
    expect(spinnerElement).toBeInTheDocument()
  })

  it("should not load spinner", () => {
    const { queryByTestId } = render(<PermitsSynopsis permits={[]} loading={false} />)
    const spinnerElement = queryByTestId("spinner")
    expect(spinnerElement).toBeNull()
  })

  it("should render Permit", () => {
    render(<PermitsSynopsis permits={PermitsSynopsisData} />)
    const firstPermit = PermitsSynopsisData.find((p) => p.resultaat && p.status)
    if (firstPermit) {
      const productName = screen.getAllByText(firstPermit.product)
      const result = screen.getAllByText(firstPermit.resultaat ?? "-")
      const status = screen.getAllByText(firstPermit.status)
      expect(productName[0]).toBeInTheDocument()
      expect(result[0]).toBeInTheDocument()
      expect(status[0]).toBeInTheDocument()
    }
  })

  it("should render permits with result", () => {
    render(<PermitsSynopsis permits={PermitsSynopsisData} />)
    const permitsWithResult = PermitsSynopsisData.filter((p) => p.status && p.resultaat)
    permitsWithResult.forEach((p) => {
      const result = screen.getAllByText(p.resultaat ?? "")
      const status = screen.getAllByText(p.status)
      expect(result[0]).toBeInTheDocument()
      expect(status[0]).toBeInTheDocument()
    })
  })
})
