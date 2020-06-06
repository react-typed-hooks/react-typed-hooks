# useWindowSize

React hook that returns the window size. Updates on window resize and orientation change.

## Installation

```bash
npm install @react-typed-hooks/use-window-size
```

## Usage

```tsx
import { useWindowSize } from "@react-typed-hooks/use-window-size";

const Demo = () => {
  const size = useWindowSize();

  return size ? (
    <pre>JSON.stringify(size, null, 4)</pre>
  ) : (
    <span>Size is null in a node like environment</span>
  );
};
```

## API

### Types

```ts
interface Size {
  height: number;
  width: number;
}

interface UseWindowSizeOptions {
  wait?: number;
}
```

```ts
function useWindowSize(options?: UseWindowSizeOptions): Size | null;
```

### Options

`wait`

The amount of time to delay updating `Size` after the orientation changes.

The amount of time to throttle between updating `Size` when the window is resized.
