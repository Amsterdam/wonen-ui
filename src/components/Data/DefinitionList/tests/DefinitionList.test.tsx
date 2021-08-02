import React from "react"
import { shallow } from "enzyme"
import DefinitionList from "../DefinitionList"
import Definition from "../components/Definition"
import { Heading } from "@amsterdam/asc-ui"

describe("DefinitionList", () => {
  let component = shallow(<DefinitionList data={{}}/>)
  
  it("should render NO component with a definition", () => {
    expect(component.find(Definition).exists()).toEqual(false)
  })

  it("should render component with a Definition", () => {  
    component.setProps({ data: { "label A": "value A", "label B": "value B" } })
    expect(component.find(Definition).exists()).toEqual(true)
  })

  it("should render component without a title", () => {
    expect(component.find(Heading).exists()).toEqual(false)
  })

  it("should render component with a title", () => {
    component.setProps({ title: "Titel" })
    expect(component.find(Heading).exists()).toEqual(true)
  })
})
