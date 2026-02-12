import React from "react"
import { render } from "@testing-library/react"
import Residents from "../Residents"
import residentsData from "../../../stories/mockedData/residentsData"

describe("Residents", () => {

  it("should render a header and ResidentsView", () => {
    const { getByTestId } = render(
      <Residents data={residentsData} header loading={true} />
    )
    expect(getByTestId("header")).toBeInTheDocument()
  })

  it("should not render a header", () => {
    const { queryByTestId } = render(
      <Residents data={residentsData} loading={true} header={false} />
    )
    expect(queryByTestId("header")).toBeNull()
  })
})
