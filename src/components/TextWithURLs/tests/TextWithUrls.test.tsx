import React from "react"
import { render, screen } from "@testing-library/react"
import TextWithUrls from "../TextWithURLs"

describe("TextWithUrls", () => {
  it("should render component with url", () => {
    render(<TextWithUrls text="http://example.com/" />)
    const linkElement = screen.getByRole("link", { name: "http://example.com/" })
    expect(linkElement).toHaveAttribute("href", "http://example.com/")
  })

  it("should render component without url", () => {
    render(<TextWithUrls text="no url" />)
    const linkElement = screen.queryByRole("link")
    expect(linkElement).toBeNull()
  })
})
