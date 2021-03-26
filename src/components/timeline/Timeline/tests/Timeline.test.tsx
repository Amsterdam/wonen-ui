import React from "react"
import { shallow } from "enzyme"
import Timeline from "../Timeline"
import Header from "components/timeline/Header/Header"

test("renders the component with Header", () => {
  const component = shallow(<Timeline />)
  expect(component.contains(<Header />)).toEqual(true)
})
