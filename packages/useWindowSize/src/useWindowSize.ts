import { hasWindow } from "@react-typed-hooks/utils";
import { delay, throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

interface Size {
  height: number;
  width: number;
}

interface UseWindowSizeOptions {
  wait?: number;
}

const getSize: () => Size | null = () =>
  hasWindow()
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : null;

export default function useWindowSize({
  wait = 200,
}: UseWindowSizeOptions = {}): Size | null {
  const [windowSize, setWindowSize] = useState(getSize());

  const baseHandler = useCallback(() => setWindowSize(getSize()), []);

  const orientationHandler = useCallback(() => {
    delay(baseHandler, wait);
  }, [baseHandler, wait]);

  const resizeHandler = useCallback(() => throttle(baseHandler, wait), [
    baseHandler,
    wait,
  ]);

  useEffect(() => {
    if (!hasWindow()) {
      return;
    }

    const mediaQuery = window.matchMedia("(orientation: portrait)");

    mediaQuery.addListener(orientationHandler);

    return () => {
      mediaQuery.removeListener(orientationHandler);
    };
  }, [orientationHandler]);

  useEffect(() => {
    if (!hasWindow()) {
      return;
    }

    window.addEventListener("resize", resizeHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return windowSize;
}
