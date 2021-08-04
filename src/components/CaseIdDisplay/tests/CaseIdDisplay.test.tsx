import React from "react"
import { shallow } from "enzyme"
import CaseIdDisplay from "../CaseIdDisplay"

describe("DateDisplay", () => {
  const component = shallow(<CaseIdDisplay />)

  it("should render component empty", () => {
    expect(component.text()).toContain("-")
  })

  it("should render component with a 6-digit id", () => {
    component.setProps({ id: "1234" })
    expect(component.text()).toContain("001234")
  })
})
