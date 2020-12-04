import { hasWindow } from "../";

describe("useKeyPress", () => {
  it("should return true", () => {
    expect(hasWindow()).toBe(true);
  });
});
