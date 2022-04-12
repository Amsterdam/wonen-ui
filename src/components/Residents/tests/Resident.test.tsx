import React from "react"
import { shallow } from "enzyme"
import { Accordion } from "@amsterdam/asc-ui"
import residentsData from "../../../stories/mockedData/residentsData"
import DefinitionList from "../../Data/DefinitionList/DefinitionList"
import Resident from "../Resident"

describe("Resident", () => {
  const component = shallow(
    <Resident resident={ residentsData?._embedded?.ingeschrevenpersonen[0] } num={ 0 } />)

  it("should render a Accordion", () => {
    expect(component.find(Accordion).exists()).toBeTruthy()
  })

  it("should render a DefinitionList", () => {
    expect(component.find(DefinitionList).exists()).toBeTruthy()
  })

})
