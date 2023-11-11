import { shallow, mount } from "enzyme"
import { Paragraph, Spinner } from "@amsterdam/asc-ui"
import PermitsSynopsis from "../PermitsSynopsis"
import PermitsSynopsisData from "../../../stories/mockedData/PermitsSynopsisData"

describe("PermitsSynopsis", () => {
  const component = shallow(<PermitsSynopsis permits={ [] } />)

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

  const wrapper = mount(<PermitsSynopsis permits={ PermitsSynopsisData } />)

  it("should render Permit", () => {
    const firstPermit = PermitsSynopsisData.find((p) => p.resultaat && p.status)
    if (firstPermit) {
      expect(wrapper.text().includes(firstPermit.product)).toBe(true)
      expect(wrapper.text().includes(firstPermit.resultaat ?? "-")).toBe(true)
      expect(wrapper.text().includes(firstPermit?.status)).toBe(true)
    }
  })

  it("should render permits with result", () => {
    wrapper.setProps({ showOnlyResults: true })
    const permitsWithResult = PermitsSynopsisData.filter((p) => p.status && p.resultaat)
    permitsWithResult.forEach((p) => {
      expect(wrapper.text().includes(p.status)).toBe(true)
      expect(wrapper.text().includes(p.resultaat ?? "")).toBe(true)
    })
  })

})
