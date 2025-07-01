import { topFrequency } from "../src/index";

describe("topFrequency", () => {
  it("returns the k most frequent numbers", () => {
    const result = topFrequency([1, 2, 3, 1, 2, 1], 2);
    expect(result).toEqual([1, 2]);
  });
});
