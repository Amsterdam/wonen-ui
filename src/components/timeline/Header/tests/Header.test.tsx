import React from "react"
import { shallow } from "enzyme"
import Header from "../Header"

test("renders the component without ID", () => {
  const component = shallow(<Header />)
  expect(component.text()).toContain("onbekend")
})
test("renders the component with ID", () => {
  const component = shallow(<Header caseId={1234} />)
  expect(component.text()).toContain("1234")
})