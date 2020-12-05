# React Typed Hooks

A collection of hooks written in TypeScript

![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
![Dependencies](https://david-dm.org/react-typed-hooks/react-typed-hooks.svg)
![Vulnerabilities](https://badgen.net/snyk/react-typed-hooks/react-typed-hooks)
![CI Build](https://github.com/react-typed-hooks/react-typed-hooks/workflows/build/badge.svg)
[![codecov](https://codecov.io/gh/react-typed-hooks/react-typed-hooks/branch/master/graph/badge.svg)](https://codecov.io/gh/react-typed-hooks/react-typed-hooks)

## Hooks

|                                             | Description                          | Latest                                                                    |
| ------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| [useKeyPress](packages/useKeyPress)         | Watch when a `targetKey` is pressed. | ![version](https://badgen.net/npm/v/@react-typed-hooks/use-key-press)     |
| [useWindowSize](packages/useWindowSize)     | Get up-to-date window size           | ![version](https://badgen.net/npm/v/@react-typed-hooks/use-window-size)   |
| [useLocalStorage](packages/useLocalStorage) | Get and set values in `localStorage` | ![version](https://badgen.net/npm/v/@react-typed-hooks/use-local-storage) |

## Contributing

Run `npm run generate` from the root packages to generate a new hook.

### NPM Script

#### `npm run generate`

Generate a new hooks package.

#### `npm test`

Run tests on every hooks package.

#### `npm run build`

Build distributable JavaScript for every hooks package.

#### `npm run lint`

Lint every hooks package.
