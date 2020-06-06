import { waitFor } from "@testing-library/dom";
import { renderHook } from "@testing-library/react-hooks";
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

    window.dispatchEvent(new Event("resize"));

    waitFor(() =>
      expect(result.current).toEqual({
        width: 768,
        height: 1024,
      }),
    );
  });

  it("should update height and width on orientation change", async () => {
    const { result } = renderHook(() => useWindowSize({ wait: 200 }));

    expect(result.current).toEqual({
      width: 700,
      height: 1000,
    });

    Object.defineProperties(window, {
      innerWidth: { value: 1000 },
      innerHeight: { value: 700 },
    });

    window.dispatchEvent(new Event("orientationchange"));

    waitFor(() =>
      expect(result.current).toEqual({
        width: 1000,
        height: 700,
      }),
    );
  });
});
