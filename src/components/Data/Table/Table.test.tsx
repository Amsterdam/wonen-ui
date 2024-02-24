import React from "react"
import { render } from "@testing-library/react"
import Table from "./Table"


describe("Table", () => {
  const columns = [{ header: "column1", minWidth: 100 }, { header: "column2", minWidth: 100 }]
  const data = [
    ["foo", "bar"],
    ["zoo", "baz"]
  ]

  describe("when NOT loading", () => {
    it("should render 4 table cells", () => {
      const { getAllByTestId } = render(<Table data={data} columns={columns} emptyPlaceholder={"..."} />)
      const tableCells = getAllByTestId("table-cell")
      expect(tableCells.length).toEqual(4)
    })

    describe("when given fixedColumnWidth", () => {
      it("should render fixed cells", () => {
        const { getAllByTestId } = render(<Table data={data} columns={columns} lastColumnFixed={true} emptyPlaceholder={"..."} />)
        const fixedCells = getAllByTestId("table-cell")
        expect(fixedCells.length).toEqual(2)
      })
    })
  })

  describe("when loading", () => {
    it("should render SmallSkeletons", () => {
      const { getAllByTestId } = render(<Table data={data} columns={columns} loading={true} emptyPlaceholder={"..."} />)
      expect(getAllByTestId("small-skeleton").length).toEqual(10) // 5 * 2 = numLoadingRows * numColumns
    })
  })
})
