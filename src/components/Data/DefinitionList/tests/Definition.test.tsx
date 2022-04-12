import React from "react"
import { shallow } from "enzyme"
import Definition from "../components/Definition"
import TextWithLinebreaks from "components/TextWithLinebreaks/TextWithLinebreaks"

describe("DefinitionList", () => {
  const component = shallow(<Definition term="Label" value="Value" />)

  it("should render a term", () => {
    expect(component.text()).toContain("Label")
  })

  it("should render a value", () => {
    expect(component.find(TextWithLinebreaks).exists()).toBeTruthy()
  })
})
