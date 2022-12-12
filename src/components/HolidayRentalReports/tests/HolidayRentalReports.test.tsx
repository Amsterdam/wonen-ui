import { shallow, mount } from "enzyme"
import moment from "moment"
import { Heading, Paragraph, Spinner } from "@amsterdam/asc-ui"
import HolidayRentalReports from "../HolidayRentalReports"
import { TITLE } from "../components/ReportsPerYear"
import holidayRentalReportsData from "../../../stories/mockedData/holidayRentalReportsData"

describe("HolidayRentalReports", () => {
  const component = shallow(<HolidayRentalReports data={[]} />)

  it("should render Heading", () => {
    expect(component.find(Heading).shallow().text()).toEqual(TITLE)
  })
  it("should render component with Heading and Paragraph", () => {
    expect(component.text()).toEqual("<Heading /><Paragraph />")
  })
  it("No data found", () => {
    expect(component.find(Paragraph).shallow().text()).toEqual("Geen vakantieverhuur meldingen")
  })
  it("should load spinner", () => {
    component.setProps({ loading: true })
    expect(component.find(Spinner).exists()).toBeTruthy()
  })
  it("should not load spinner", () => {
    component.setProps({ loading: false })
    expect(component.find(Spinner).exists()).toBeFalsy()
  })

  const wrapper = mount(<HolidayRentalReports data={ holidayRentalReportsData } />)

  it("should render most recent year", () => {
    const rental = holidayRentalReportsData[0]
    expect(wrapper.text().includes(`${ TITLE } ${ moment(rental.eindDatum).year() }`)).toBe(true)
    expect(wrapper.text().includes(`${ rental.isVerwijderd ? "Afmelding (-" : "Melding (+" }${ rental.nachten } nachten)`)).toBe(true)
  })

})
