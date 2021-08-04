import React from "react"
import { shallow } from "enzyme"
import PersonNameDisplay from "../PersonNameDisplay"

describe("PersonNameDisplay", () => {
  const component = shallow(<PersonNameDisplay sex="V" firstName="A." name="Beecee"/>)

  it("should render component with first- and lastname", () => {
    expect(component.text()).toContain("A.")
    expect(component.text()).toContain("Beecee")
  })
  it("should render component with first- and lastname and prefix", () => {
    component.setProps({ namePrefix: "van" })
    expect(component.text()).toContain("van")
  })
})
