/**
 * @jest-environment node
 */

import { renderHook } from "@testing-library/react-hooks";
import { useWindowSize } from "../";

describe("node", () => {
  describe("useWindowSize", () => {
    it("should return undefined height and width", () => {
      const { result } = renderHook(() => useWindowSize());

      expect(result.current).toEqual({
        height: undefined,
        width: undefined,
      });
    });
  });
});
