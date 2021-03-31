import React from "react"
import { shallow } from "enzyme"
import DayDisplay from "../DayDisplay"

describe("DateDisplay", () => {
  let component = shallow(<DayDisplay date="2021-03-31" />)

  it("should render component with day", () => {
    expect(component.text()).toContain("woensdag")
  })

  it("should render component with day capitalized", () => {
    component.setProps({ capitalize: true })
    expect(component.text()).toContain("Woensdag")
  })

  it("should render component with error message when no day is given", () => {
    component.setProps({ date: "" })
    expect(component.text()).toContain("Ongeldige datum")
  })

})
