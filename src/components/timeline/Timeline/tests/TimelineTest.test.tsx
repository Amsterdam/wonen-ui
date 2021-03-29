import React from "react"
import { shallow } from "enzyme"
import TimelineTest from "../TimelineTest"
import Header from "components/timeline/Header/Header"

test("renders the component with Header", () => {
  const component = shallow(<TimelineTest />)
  expect(component.contains(<Header />)).toEqual(true)
})
