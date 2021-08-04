import React from "react"
import { shallow } from "enzyme"
import FinancialDisplay from "../FinancialDisplay"

describe("FinancialDisplay", () => {
  const component = shallow(<FinancialDisplay amount={ 1250 }/>)

  it("should render component with eurosign", () => {
    expect(component.text()).toContain("€")
  })

  it("should render component without cents", () => {
    component.setProps({ amount: "1250.45" })
    expect(component.text()).toContain("1.250")
  })
})
