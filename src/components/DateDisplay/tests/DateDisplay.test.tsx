import { shallow } from "enzyme"
import DateDisplay, { isDate, isValidDate } from "../DateDisplay"

describe("isDate", () => {

  it("Date", () => {
    expect(isDate(new Date("2021-03-31"))).toBeTruthy()
  })

  it("string", () => {
    expect(isDate("2021-03-31")).toBeTruthy()
  })

  it("non string", () => {
    expect(isDate(undefined)).toBeFalsy()
    expect(isDate(null)).toBeFalsy()
    expect(isDate(5)).toBeFalsy()
  })
})

describe("isValidDate", () => {

  it("Date", () => {
    expect(isValidDate(new Date("2021-03-31"))).toBeTruthy()
  })

  it("Date", () => {
    expect(isValidDate(new Date("ongeldig"))).toBeFalsy()
  })
})

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
