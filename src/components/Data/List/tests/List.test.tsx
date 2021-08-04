import React from "react"
import { shallow } from "enzyme"
import List from "../List"
import { Heading } from "@amsterdam/asc-ui"

describe("List", () => {
  const component = shallow(<List data={[]}/>)
  
  it("should render NO component with a listitem", () => {
    expect(component.find(<ul></ul>).exists()).toBeFalsy()
  })

  it("should render component", () => {  
    component.setProps({ data: ["Alfa", "Beta", "Gamma"] })
    expect(component.text()).toContain("Alfa")
    expect(component.text()).toContain("Beta")
    expect(component.text()).toContain("Gamma")
  })

  it("should render component without a title", () => {
    expect(component.find(Heading).exists()).toBeFalsy()
  })

  it("should render component with a title", () => {
    component.setProps({ title: "Titel" })
    expect(component.find(Heading).exists()).toBeTruthy()
  })
})
