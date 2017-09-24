const add = require("../src/index");

describe("index", () => {
  it("adds two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});