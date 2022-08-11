import { shallow } from "enzyme"
import { Spinner } from "@amsterdam/asc-ui"
import ResidentsView from "../ResidentsView"
import Resident from "../Resident"
import residentsData from "../../../stories/mockedData/residentsData"

describe("ResidentsView", () => {
  const component = shallow(<ResidentsView residents={ residentsData?._embedded?.ingeschrevenpersonen } loading={ true } />)

  it("should render a loading spinner", () => {
    expect(component.find(Spinner).exists()).toBeTruthy()
  })

  it("should not render a loading spinner", () => {
    component.setProps({ loading: false })
    expect(component.find(Spinner).exists()).toBeFalsy()
  })

  it("should render a Resident", () => {
    expect(component.find(Resident).exists()).toBeTruthy()
  })

  it("should render x Residents", () => {
    expect(component.find(Resident)).toHaveLength(residentsData?._embedded?.ingeschrevenpersonen?.length)
  })

})
