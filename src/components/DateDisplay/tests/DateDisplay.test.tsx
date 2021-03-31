import React from "react"
import { shallow } from "enzyme"
import DateDisplay from "../DateDisplay"

describe("DateDisplay", () => {
  let component = shallow(<DateDisplay date="2021-03-31" />)

  it("should render component with month as number", () => {
    expect(component.text()).toContain("31-03-2021")
  })

  it("should render component with month as name", () => {
    component.setProps({ full: true })
    expect(component.text()).toContain("31 maart 2021")
  })

  it("should render component with error message when no date is given", () => {
    component.setProps({ date: "" })
    expect(component.text()).toContain("Ongeldige datum")
  })

})
