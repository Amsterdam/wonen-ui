import capitalizeString from "./capitalizeString"

describe("capitalizeString", () => {

  it("empty string", () => {
    expect(capitalizeString("")).toBe("")
  })

  it("string", () => {
    expect(capitalizeString("alpha")).toBe("Alpha")
  })
})