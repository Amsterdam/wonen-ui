import React from "react"
import { render, shallow } from "enzyme"
import TextWithUrls from "../TextWithURLs"

describe("TextWithUrls", () => {
  let component = render(<TextWithUrls text="http://example.com/"/>)

  it("should render component with url", () => {
    expect(component.find("a").prop("href")).toEqual("http://example.com/")
  })

  it("should render component without url", () => {
    let component = shallow(<TextWithUrls text="no url"/>)
    expect(component.find("a").exists()).toEqual(false)
  })

})
