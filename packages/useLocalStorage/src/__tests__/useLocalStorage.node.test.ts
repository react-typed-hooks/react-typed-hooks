/**
 * @jest-environment node
 */

import { act, renderHook } from "@testing-library/react-hooks";
import { useLocalStorage } from "../";

describe("node", () => {
  describe("useLocalStorage", () => {
    it("should return the passed in value", () => {
      const initialValue = { mock: "value" };
      const { result } = renderHook(() =>
        useLocalStorage("any-key", initialValue),
      );

      const [value] = result.current;

      expect(value).toBe(initialValue);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    it("should return a set function that does nothing", () => {
      const { result } = renderHook(() =>
        useLocalStorage("any-key", "mock-value-1"),
      );

      const [value, setValue] = result.current;

      expect(value).toBe("mock-value-1");

      act(() => {
        setValue("mock-value-2");
      });

      const [newValue] = result.current;

      expect(newValue).toBe("mock-value-2");
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });
});
