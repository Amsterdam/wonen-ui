import React from "react"
import { shallow } from "enzyme"
import TextWithLinebreaks from "../TextWithLinebreaks"

describe("TextWithLinebreaks", () => {
  const component = shallow(<TextWithLinebreaks>Value</TextWithLinebreaks>)
  
  it("should render a term", () => {  
    expect(component.text()).toEqual("Value")
  })
})
