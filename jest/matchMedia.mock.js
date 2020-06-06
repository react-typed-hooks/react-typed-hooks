if (typeof window === "object") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((media) => {
      const listeners = [];

      const addEventListener = (fn) => {
        listeners.push(fn);
      };

      const removeEventListener = (fn) => {
        listeners.pop(fn);
      };

      // Note: Only supporting simple single queries
      const isMatch = (media) => {
        const normalized = media.replace(/\s|\(|\)/g, "");

        // Note: Only supports pixels.
        const [query, rawValue] = normalized.split(":");
        const value =
          rawValue.indexOf("height") > -1 || rawValue.indexOf("width") > -1
            ? parseInt(rawValue, 10)
            : rawValue;

        switch (query) {
          case "min-height":
            return window.innerHeight > value;
          case "max-height":
            return window.innerHeight <= value;
          case "min-width":
            return window.innerWidth > value;
          case "max-width":
            return window.innerWidth <= value;
          case "orientation":
            switch (value) {
              case "portrait":
                return window.innerHeight > window.innerWidth;
              case "landscape":
                return window.innerWidth > window.innerHeight;
              default:
                return false;
            }
          default:
            return false;
        }
      };

      const handleResize = () => {
        listeners.forEach((fn) => fn({ matches: isMatch(media), media }));
      };

      window.addEventListener("orientationchange", handleResize);

      window.addEventListener("resize", handleResize, {
        passive: true,
      });

      return {
        matches: isMatch(media),
        media,
        addListener: addEventListener, // deprecated
        addEventListener,
        removeListener: removeEventListener, // deprecated
        removeEventListener,
      };
    }),
  });
}
