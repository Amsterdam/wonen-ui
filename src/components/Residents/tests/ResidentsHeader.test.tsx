import { shallow, mount } from "enzyme"
import { Heading } from "@amsterdam/asc-ui"
import ResidentsHeader from "../ResidentsHeader"

describe("ResidentsHeader", () => {
  const component = shallow(<ResidentsHeader residents={ undefined } />)

  it("should render a Heading", () => {
    expect(component.find(Heading).exists()).toBeTruthy()
  })

  const wrapper = mount(<ResidentsHeader residents={ undefined } />)

  it("should render specific title", () => {
    expect(wrapper.text().includes("Actueel ingeschreven personen")).toBe(true)
  })

  it("should render title with 0 residents", () => {
    expect(wrapper.text().includes("Actueel ingeschreven personen (0)")).toBe(false)
    wrapper.setProps({ residents: [] })
    expect(wrapper.text().includes("Actueel ingeschreven personen (0)")).toBe(true)
  })

  it("should render title with 2 residents", () => {
    wrapper.setProps({ residents: [{}, {}] })
    expect(wrapper.text().includes("Actueel ingeschreven personen (2)")).toBe(true)
  })

  it("should render title with deceased residents", () => {
    wrapper.setProps({ residents: [{}, {}, {}, { overlijden: { datum: { datum: "x" } } }] })
    expect(wrapper.text().includes("Actueel ingeschreven personen (3)")).toBe(true)
  })

})
