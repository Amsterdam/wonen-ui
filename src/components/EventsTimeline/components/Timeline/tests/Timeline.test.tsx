import React from "react"
import { shallow } from "enzyme"
import Timeline from "../Timeline"

describe("Timeline", () => {
  const component = shallow(<Timeline title="Titel" />)

  it("should render component with the right title", () => {
    expect(component.text()).toContain("Titel")
  })
})
