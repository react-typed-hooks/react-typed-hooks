import { hasWindow } from "@react-typed-hooks/utils";
import { useState } from "react";

type SetValue = (value: any | ((value: any) => any)) => void;

export default function useLocalStorage(
  key: string,
  defaultValue?: any,
): [any, SetValue] {
  const [storedValue, setStoredValue] = useState<any>(() => {
    if (!hasWindow()) {
      return defaultValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setValue: SetValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (!hasWindow()) {
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
