import { shallow, mount } from "enzyme"
import { Heading, Paragraph, Spinner } from "@amsterdam/asc-ui"
import PermitsOverview from "../PermitsOverview"
import permitsOverviewData from "../../../stories/mockedData/permitsOverviewData"

describe("PermitsOverview", () => {
  const component = shallow(<PermitsOverview permits={[]} />)

  it("should render Heading", () => {
    expect(component.find(Heading).shallow().text()).toEqual("Vergunningen")
  })
  it("should render component with Heading and Paragraph", () => {
    expect(component.text()).toEqual("<Heading /><Paragraph />")
  })
  it("No permits found", () => {
    expect(component.find(Paragraph).shallow().text()).toEqual("Geen vergunningen gevonden")
  })
  it("should load spinner", () => {
    component.setProps({ loading: true })
    expect(component.find(Spinner).exists()).toBeTruthy()
  })
  it("should not load spinner", () => {
    component.setProps({ loading: false })
    expect(component.find(Spinner).exists()).toBeFalsy()
  })

  const wrapper = mount(<PermitsOverview permits={permitsOverviewData} />)

  it("should render B&B Permit", () => {
    const firstPermitData = permitsOverviewData[0]
    expect(wrapper.text().includes(firstPermitData.permit_type)).toBe(true)
    expect(wrapper.text().includes(firstPermitData?.details?.RESULT)).toBe(true)
    expect(wrapper.text().includes(firstPermitData?.details?.SUBJECT)).toBe(true)
    expect(wrapper.text().includes(firstPermitData?.details?.ADDRESS)).toBe(true)
    expect(wrapper.text().includes(firstPermitData?.details?.HOLDER)).toBe(true)
    expect(wrapper.text().includes(firstPermitData?.details?.PERMIT_NAME)).toBe(true)
  })
  it("should render Vakantieverhuurvergunning Permit", () => {
    const secondPermitData = permitsOverviewData[1]
    expect(wrapper.text().includes(secondPermitData.permit_type)).toBe(true)
    expect(wrapper.text().includes(secondPermitData?.details?.RESULT)).toBe(true)
    expect(wrapper.text().includes(secondPermitData?.details?.SUBJECT)).toBe(true)
    expect(wrapper.text().includes(secondPermitData?.details?.ADDRESS)).toBe(true)
    expect(wrapper.text().includes(secondPermitData?.details?.HOLDER)).toBe(false) // No holder
    expect(wrapper.text().includes(secondPermitData?.details?.PERMIT_NAME)).toBe(true)
  })
  it("should not render UNKNOWN permits", () => {
    wrapper.setProps({ showUnknown: false })
    expect(wrapper.text().includes(permitsOverviewData[2].permit_type)).toBe(false)
    expect(wrapper.text().includes(permitsOverviewData[3].permit_type)).toBe(false)
    expect(wrapper.text().includes(permitsOverviewData[4].permit_type)).toBe(false)
    expect(wrapper.text().includes(permitsOverviewData[5].permit_type)).toBe(false)
  })
  it("should render UNKNOWN permits", () => {
    wrapper.setProps({ showUnknown: true })
    expect(wrapper.text().includes(permitsOverviewData[2].permit_type)).toBe(true)
    expect(wrapper.text().includes(permitsOverviewData[3].permit_type)).toBe(true)
    expect(wrapper.text().includes(permitsOverviewData[4].permit_type)).toBe(true)
    expect(wrapper.text().includes(permitsOverviewData[5].permit_type)).toBe(true)
  })

})
