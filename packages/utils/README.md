# Utils

Utility functions to use within hooks.

![version](https://badgen.net/npm/v/@react-typed-hooks/utils)

## Installation

```bash
npm install @react-typed-hooks/utils
```

## Usage

### `hasWindow`

Returns true if `window` is a type of object.

```ts
import { hasWindow } from @react-typed-hooks/utils;

if (hasWindow()) {
  window.addEventListener("keydown", downHandler);
}
```
