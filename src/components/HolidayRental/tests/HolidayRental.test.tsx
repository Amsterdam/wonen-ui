import { shallow, mount } from "enzyme"
import { Heading, Paragraph, Spinner } from "@amsterdam/asc-ui"
import HolidayRental, { TITLE } from "../HolidayRental"
import holidayRentalData from "../../../stories/mockedData/holidayRentalData"
import useNumberOfDaysBetweenDates from "../components/hooks/useNumberOfDaysBetweenDates"

describe("HolidayRental", () => {
  const component = shallow(<HolidayRental data={[]} />)

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

  const wrapper = mount(<HolidayRental data={holidayRentalData} />)

  it("should render most recent year", () => {
    const rental = holidayRentalData[0]
    const { check_in_date, check_out_date, is_cancellation } = rental.reports[0]
    const nightsRented = useNumberOfDaysBetweenDates(check_in_date, check_out_date)
    expect(wrapper.text().includes(`${ TITLE } ${ rental.year }`)).toBe(true)
    expect(wrapper.text().includes(`${ is_cancellation ? "Afmelding" : "Melding" } (${ nightsRented } nachten)`)).toBe(true)
  })
  it("should not render other years", () => {
    wrapper.setProps({ showRecentYearOnly: true })
    const rental1 = holidayRentalData[1]
    const { check_in_date, check_out_date, is_cancellation } = rental1.reports[0]
    const nightsRented = useNumberOfDaysBetweenDates(check_in_date, check_out_date)
    expect(wrapper.text().includes(`${ TITLE } ${ rental1.year }`)).toBe(false)
    expect(wrapper.text().includes(`${ is_cancellation ? "Afmelding" : "Melding" } (${ nightsRented } nachten)`)).toBe(false)
  })
  it("should render other years", () => {
    wrapper.setProps({ showRecentYearOnly: false })
    const rental1 = holidayRentalData[1]
    const { check_in_date, check_out_date, is_cancellation } = rental1.reports[0]
    const nightsRented = useNumberOfDaysBetweenDates(check_in_date, check_out_date)
    expect(wrapper.text().includes(`${ TITLE } ${ rental1.year }`)).toBe(true)
    expect(wrapper.text().includes(`${ is_cancellation ? "Afmelding" : "Melding" } (${ nightsRented } nachten)`)).toBe(true)
  })

})
