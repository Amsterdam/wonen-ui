import React from "react"
import { shallow } from "enzyme"
import Definition from "../components/Definition"

describe("DefinitionList", () => {
  let component = shallow(<Definition term={"Label"} value={"Value"}/>)
  
  it("should render a term", () => {  
    expect(component.text()).toContain("Label")
  })

  it("should render a value", () => {  
    expect(component.text()).toContain("Value")
  })
})
