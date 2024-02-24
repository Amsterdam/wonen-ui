import React from "react"
import { render } from "@testing-library/react"
import ResidentsView from "../ResidentsView"
import residentsData from "../../../stories/mockedData/residentsData"

describe("ResidentsView", () => {
  it("should render a loading spinner", () => {
    const { getByTestId } = render(
      <ResidentsView
        residents={residentsData?._embedded?.ingeschrevenpersonen}
        loading={true}
      />
    )
    const spinner = getByTestId("spinner")
    expect(spinner).toBeInTheDocument()
  })
})
