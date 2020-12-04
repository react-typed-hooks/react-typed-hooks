import { fireEvent } from "@testing-library/dom";
import { act, renderHook } from "@testing-library/react-hooks";
import { useKeyPress } from "../";

describe("useKeyPress", () => {
  test("should render the hook", () => {
    const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

    expect(result.current).toBe(false);
  });

  test("should return false when a different key is pressed", () => {
    const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keydown", {
          key: "Enter",
        }),
      );
    });

    expect(result.current).toBe(false);
  });

  test("should return true when the expected key is pressed", () => {
    const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keydown", {
          key: "Escape",
        }),
      );
    });

    expect(result.current).toBe(true);
  });

  test("should return true when the expected key is pressed and false when unpressed", () => {
    const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keydown", {
          key: "Escape",
        }),
      );
    });

    expect(result.current).toBe(true);

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keyup", {
          key: "Escape",
        }),
      );
    });

    expect(result.current).toBe(false);
  });

  test("should handle multiple keys", () => {
    const { result } = renderHook(() => useKeyPress({ targetKey: "Escape" }));

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keydown", {
          key: "Enter",
        }),
      );
    });

    expect(result.current).toBe(false);

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keydown", {
          key: "Escape",
        }),
      );
    });

    expect(result.current).toBe(true);

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keyup", {
          key: "Enter",
        }),
      );
    });

    expect(result.current).toBe(true);

    act(() => {
      fireEvent(
        window,
        new KeyboardEvent("keyup", {
          key: "Escape",
        }),
      );
    });

    expect(result.current).toBe(false);
  });
});
