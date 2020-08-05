# useKeyPress

React hook that returns `true` when the specified `targetKey` is pressed.

![version](https://badgen.net/npm/v/@react-typed-hooks/use-key-press)

## Installation

```bash
npm install @react-typed-hooks/use-key-press
```

## Usage

```tsx
import { useKeyPress } from "@react-typed-hooks/use-key-press";

const Demo = () => {
  const isEscapePressed = useKeyPress({ targetKey: "Escape" });

  return isEscapePressed ? "Yes" : "No";
};
```

## API

### Types

```ts
interface UseKeyPressOptions {
  targetKey: KeyboardEvent["key"];
}
```

```ts
function useKeyPress(options: UseKeyPressOptions): boolean;
```

### Options

`targetKey: KeyboardEvent["key"]`

A [predefined key value](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) (i.e, `Escape`, `Enter`, `Backspace`, etc) to watch the `keydown` and `keyup` event on.
