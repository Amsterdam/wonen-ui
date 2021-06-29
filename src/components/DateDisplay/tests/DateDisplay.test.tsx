import { shallow } from "enzyme"
import DateDisplay from "../DateDisplay"

describe("DateDisplay", () => {

  it("should render component with month as number", () => {
    const component = shallow(<DateDisplay date="2021-03-31" />)
    expect(component.text()).toContain("31-03-2021")
  })

  it("should render component with month as name", () => {
    const component = shallow(<DateDisplay date="2021-03-31" full={ true } />)
    expect(component.text()).toContain("31 maart 2021")
  })

  it("should render component with empty date message when undefined date is given", () => {
    const component = shallow(<DateDisplay date={ undefined } emptyText="Geen datum" />)
    expect(component.text()).toContain("Geen datum")
  })

  it("should render component with invalid date message when invalid date is given", () => {
    const component = shallow(<DateDisplay date="ongeldig" />)
    expect(component.text()).toContain("Ongeldige datum")
  })
})
