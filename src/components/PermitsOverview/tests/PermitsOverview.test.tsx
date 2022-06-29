import { shallow, mount } from "enzyme"
import { Paragraph, Spinner } from "@amsterdam/asc-ui"
import PermitsOverview from "../PermitsOverview"
import permitsOverviewData from "../../../stories/mockedData/permitsOverviewData"

describe("PermitsOverview", () => {
  const component = shallow(<PermitsOverview permits={[]} />)

  it("should render component with Heading and Paragraph", () => {
    expect(component.text()).toEqual("<Paragraph />")
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

  it("should render Permit", () => {
    const firstPermitData = permitsOverviewData.find((permitData) => permitData.permit_granted === "GRANTED")
    if (firstPermitData) {
      expect(wrapper.text().includes(firstPermitData.permit_type)).toBe(true)
      expect(wrapper.text().includes(firstPermitData?.details?.RESULT)).toBe(true)
      expect(wrapper.text().includes(firstPermitData?.details?.SUBJECT)).toBe(true)
      expect(wrapper.text().includes(firstPermitData?.details?.ADDRESS)).toBe(true)
      expect(wrapper.text().includes(firstPermitData?.details?.PERMIT_NAME)).toBe(true)
    }
  })

  it("should not render UNKNOWN permits", () => {
    wrapper.setProps({ showUnknown: false })
    const unknownPermits = permitsOverviewData.filter((permitData) => permitData.permit_granted === "UNKNOWN")
    unknownPermits.forEach((unknownPermit) => {
      expect(wrapper.text().includes(unknownPermit.permit_type)).toBe(false)
    })
  })

  it("should render UNKNOWN permits", () => {
    wrapper.setProps({ showUnknown: true })
    const unknownPermits = permitsOverviewData.filter((permitData) => permitData.permit_granted === "UNKNOWN")
    unknownPermits.forEach((unknownPermit) => {
      expect(wrapper.text().includes(unknownPermit.permit_type)).toBe(true)
    })
  })

})
