# useLocalStorage

React hook that will return the entry in `localstorage` for the passed in key after passing it through `JSON.parse`.

The hook also returns a setter that will update the returned value and store the result of `JSON.stringify` in `localstorage`

![version](https://badgen.net/npm/v/@react-typed-hooks/use-local-storage)

## Installation

```bash
npm install @react-typed-hooks/use-local-storage
```

## Usage

Get a value out of `localstorage`

```tsx
import { useLocalStorage } from "@react-typed-hooks/use-window-size";

const Demo = () => {
  const [value] = useLocalStorage("any-key");

  ...
};
```

Pass in a default value to return if the key is not found in `localstorage`.

```tsx
import { useLocalStorage } from "@react-typed-hooks/use-window-size";

const Demo = () => {
  const [value, setValue] = useLocalStorage("any-key", { foo: "bar" });

  ...
};
```

Set a value in `localstorage`.

```tsx
import { useLocalStorage } from "@react-typed-hooks/use-window-size";

const Demo = () => {
  const [value, setValue] = useLocalStorage("any-key", "any-value");

  return <button onClick={() => setValue("new-value")}>{value}</button>;
};
```

## API

### Types

```ts
type SetValue = (value: any | ((value: any) => any)) => void;

function useLocalStorage(key: string, defaultValue: any): [any, SetValue];
```
