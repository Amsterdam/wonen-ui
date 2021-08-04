import React from "react"
import { render, shallow } from "enzyme"
import TextWithUrls from "../TextWithURLs"

describe("TextWithUrls", () => {
  
  it("should render component with url", () => {
    const component = render(<TextWithUrls text="http://example.com/"/>)
    expect(component.find("a").prop("href")).toEqual("http://example.com/")
  })

  it("should render component without url", () => {
    const component = shallow(<TextWithUrls text="no url"/>)
    expect(component.find("a").exists()).toBeFalsy()
  })

})
