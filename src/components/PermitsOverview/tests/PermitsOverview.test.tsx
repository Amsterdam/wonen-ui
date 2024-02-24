import React from "react"
import { render, screen } from "@testing-library/react"
import PermitsOverview from "../PermitsOverview"
import permitsOverviewData from "../../../stories/mockedData/permitsOverviewData"

describe("PermitsOverview", () => {
  it("should render component with Heading and Paragraph", () => {
    render(<PermitsOverview permits={[]} />)
    const paragraphElement = screen.getByText(/Geen vergunningen gevonden/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it("should load spinner", () => {
    render(<PermitsOverview permits={[]} loading={true} />)
    const spinnerElement = screen.getByTestId("spinner")
    expect(spinnerElement).toBeInTheDocument()
  })

  it("should not load spinner", () => {
    render(<PermitsOverview permits={[]} loading={false} />)
    const spinnerElement = screen.queryByTestId("spinner")
    expect(spinnerElement).toBeNull()
  })

  it("should render Permit", () => {
    render(<PermitsOverview permits={permitsOverviewData} />)
    permitsOverviewData.forEach((permitData) => {
      if (permitData.permit_granted === "GRANTED") {
        expect(screen.getByText(permitData.permit_type)).toBeInTheDocument()
        expect(screen.getByText(permitData.details?.RESULT)).toBeInTheDocument()
        expect(screen.getByText(permitData.details?.SUBJECT)).toBeInTheDocument()
        expect(screen.getByText(permitData.details?.ADDRESS)).toBeInTheDocument()
        expect(screen.getByText(permitData.details?.PERMIT_NAME)).toBeInTheDocument()
      }
    })
  })

  it("should not render UNKNOWN permits", () => {
    render(<PermitsOverview permits={permitsOverviewData} showUnknown={false} />)
    permitsOverviewData.forEach((permitData) => {
      if (permitData.permit_granted === "UNKNOWN") {
        expect(screen.queryByText(permitData.permit_type)).not.toBeInTheDocument()
      }
    })
  })

  it("should render UNKNOWN permits", () => {
    render(<PermitsOverview permits={permitsOverviewData} showUnknown={true} />)
    permitsOverviewData.forEach((permitData) => {
      if (permitData.permit_granted === "UNKNOWN") {
        expect(screen.getByText(permitData.permit_type)).toBeInTheDocument()
      }
    })
  })
})
