/**
 * @jest-environment node
 */

import { renderHook } from "@testing-library/react-hooks";
import { useWindowSize } from "../";

describe("node", () => {
  describe("useWindowSize", () => {
    it("should return null", () => {
      const { result } = renderHook(() => useWindowSize());

      expect(result.current).toBe(null);
    });
  });
});
