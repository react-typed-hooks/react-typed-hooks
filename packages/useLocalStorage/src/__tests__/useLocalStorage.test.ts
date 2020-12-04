import { act, renderHook } from "@testing-library/react-hooks";
import { useLocalStorage } from "../";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should render the hook", () => {
    const { result } = renderHook(() =>
      useLocalStorage("mock-key", { foo: "bar" }),
    );

    const [value] = result.current;

    expect(value).toEqual({ foo: "bar" });
  });

  test("should return value from storage on first render", () => {
    localStorage.setItem("mock-key", JSON.stringify({ baz: "qui" }));
    const { result } = renderHook(() =>
      useLocalStorage("mock-key", { foo: "bar" }),
    );

    const [value] = result.current;

    expect(value).toEqual({ baz: "qui" });
  });

  test("should update the value in storage", () => {
    const record: Record<string, string> = { foo: "bar" };
    const { result } = renderHook(() => useLocalStorage("mock-key", record));

    const [value, setValue] = result.current;

    expect(value).toEqual({ foo: "bar" });

    act(() => {
      setValue({ baz: "qui" });
    });

    const [newValue] = result.current;

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "mock-key",
      JSON.stringify({
        baz: "qui",
      }),
    );
    expect(newValue).toEqual({ baz: "qui" });
  });

  test("should update the value in storage from a function", () => {
    const record: Record<string, string> = { foo: "bar" };
    const { result } = renderHook(() => useLocalStorage("mock-key", record));

    const [value, setValue] = result.current;

    expect(value).toEqual({ foo: "bar" });

    act(() => {
      setValue(() => ({ baz: "qui" }));
    });

    const [newValue] = result.current;

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "mock-key",
      JSON.stringify({
        baz: "qui",
      }),
    );
    expect(newValue).toEqual({ baz: "qui" });
  });

  test("should log an error if a previously stored value is not JSON parseable", () => {
    const error = jest.spyOn(console, "error").mockImplementation();
    localStorage.setItem("mock-key", "{ malformed: json ");

    const { result } = renderHook(() =>
      useLocalStorage("mock-key", "intial-value"),
    );

    const [value] = result.current;

    expect(error).toHaveBeenCalled();
    expect(value).toBe(value);

    error.mockRestore();
  });

  test("should log an error if set value is not JSON stringifiable", () => {
    const error = jest.spyOn(console, "error").mockImplementation();
    // Cyclical object that references itself
    const obj: { prop?: any } = {};
    obj.prop = obj;

    const { result } = renderHook(() => useLocalStorage("mock-key", obj));

    const [value, setValue] = result.current;

    expect(value).toBe(obj);

    act(() => {
      setValue(obj);
    });

    expect(error).toHaveBeenCalled();

    error.mockRestore();
  });

  test("should allow any type", () => {
    const { result } = renderHook(() =>
      useLocalStorage("mock-key", "some string"),
    );

    const [value, setValue] = result.current;

    expect(value).toBe("some string");

    act(() => {
      setValue(9);
    });

    const [newValue] = result.current;

    expect(newValue).toBe(9);
  });
});
