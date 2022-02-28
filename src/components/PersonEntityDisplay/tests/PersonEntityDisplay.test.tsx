import React from "react"
import { shallow } from "enzyme"
import PersonEntityDisplay from "../PersonEntityDisplay"

describe("PersonEntityDisplay", () => {
  const component = shallow(<PersonEntityDisplay entityName="Foo" personFunction="Bar" />)

  it("should render component with entity name and function", () => {
    expect(component.text()).toContain("Foo")
    expect(component.text()).toContain("Bar")
  })
})
