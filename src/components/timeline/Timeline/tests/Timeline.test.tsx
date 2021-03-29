import React from "react"
import { shallow } from "enzyme"
import Timeline from "../Timeline"

test("renders the component with the right title", () => {
  const component = shallow(<Timeline title={"Titel"} />)
  expect(component.text()).toContain("Titel")
})