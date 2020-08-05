/**
 * @jest-environment node
 */

import { renderHook } from "@testing-library/react-hooks";
import { useKeyPress } from "../";

describe("node", () => {
  describe("useWindowSize", () => {
    it("should return null", () => {
      const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

      expect(result.current).toBe(false);
    });
  });
});
