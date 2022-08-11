import { shallow } from "enzyme"
import Residents from "../Residents"
import ResidentsView from "../ResidentsView"
import ResidentsHeader from "../ResidentsHeader"
import residentsData from "../../../stories/mockedData/residentsData"

describe("Residents", () => {
  const component = shallow(<Residents data={ residentsData } loading={ true } header />)

  it("should render a header and Residentsview", () => {
    expect(component.find(ResidentsHeader).exists()).toBeTruthy()
    expect(component.find(ResidentsView).exists()).toBeTruthy()
  })

  it("should not render a header", () => {
    component.setProps({ header: false })
    expect(component.find(ResidentsHeader).exists()).toBeFalsy()
  })

})
