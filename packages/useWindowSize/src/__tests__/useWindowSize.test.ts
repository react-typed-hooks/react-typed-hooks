import { act, renderHook } from "@testing-library/react-hooks";
import { useWindowSize } from "../";

const defaultHeight = window.innerHeight;
const defaultWidth = window.innerHeight;

describe("useWindowSize", () => {
  afterEach(() => {
    Object.defineProperties(window, {
      innerWidth: { value: defaultWidth },
      innerHeight: { value: defaultHeight },
    });
  });

  beforeEach(() => {
    Object.defineProperties(window, {
      innerWidth: { value: 700 },
      innerHeight: { value: 1000 },
    });
  });

  it("should return height and width", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: 700,
      height: 1000,
    });
  });

  it("should update height and width on resize", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: 700,
      height: 1000,
    });

    Object.defineProperties(window, {
      innerWidth: { value: 768 },
      innerHeight: { value: 1024 },
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 768,
      height: 1024,
    });
  });
});
