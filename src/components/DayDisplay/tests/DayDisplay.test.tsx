import React from "react"
import { shallow } from "enzyme"
import DayDisplay from "../DayDisplay"

describe("DateDisplay", () => {

  it("should render component with day", () => {
    const component = shallow(<DayDisplay date="2021-03-31" />)
    expect(component.text()).toContain("woensdag")
  })

  it("should render component with day capitalized", () => {
    const component = shallow(<DayDisplay date="2021-03-31" capitalize={ true } />)
    expect(component.text()).toContain("Woensdag")
  })

  it("should render component with error message when no day is given", () => {
    const component = shallow(<DayDisplay date="" />)
    expect(component.text()).toContain("Ongeldige datum")
  })
})
