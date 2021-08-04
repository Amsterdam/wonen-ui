import React from "react"
import { shallow } from "enzyme"
import PersonRoleDisplay from "../PersonRoleDisplay"

describe("PersonRoleDisplay", () => {
  const component = shallow(<PersonRoleDisplay personRole="PERSON_ROLE_OWNER"/>)

  it("should render component with role -eigenaar-", () => {
    expect(component.text()).toContain("eigenaar")
  })

  it("should render component with role -bewoner-", () => {
    component.setProps({ personRole: "PERSON_ROLE_RESIDENT" })
    expect(component.text()).toContain("bewoner")
  })

  it("should render component with role -tussenpersoon-", () => {
    component.setProps({ personRole: "PERSON_ROLE_MIDDLEMAN" })
    expect(component.text()).toContain("tussenpersoon")
  })

})
