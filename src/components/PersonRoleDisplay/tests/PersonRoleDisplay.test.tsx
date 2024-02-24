import React from "react"
import { render } from "@testing-library/react"
import PersonRoleDisplay from "../PersonRoleDisplay"

describe("PersonRoleDisplay", () => {
  it("should render component with role -eigenaar-", () => {
    const { getByText } = render(<PersonRoleDisplay personRole="PERSON_ROLE_OWNER" />)
    expect(getByText("eigenaar")).toBeInTheDocument()
  })

  it("should render component with role -bewoner-", () => {
    const { getByText, rerender } = render(<PersonRoleDisplay personRole="PERSON_ROLE_OWNER" />)
    rerender(<PersonRoleDisplay personRole="PERSON_ROLE_RESIDENT" />)
    expect(getByText("bewoner")).toBeInTheDocument()
  })

  it("should render component with role -tussenpersoon-", () => {
    const { getByText, rerender } = render(<PersonRoleDisplay personRole="PERSON_ROLE_OWNER" />)
    rerender(<PersonRoleDisplay personRole="PERSON_ROLE_MIDDLEMAN" />)
    expect(getByText("tussenpersoon")).toBeInTheDocument()
  })
})
