/**
 * @jest-environment node
 */

import { hasWindow } from "../";

describe("node", () => {
  describe("useKeyPress", () => {
    it("should return false", () => {
      expect(hasWindow()).toBe(false);
    });
  });
});
