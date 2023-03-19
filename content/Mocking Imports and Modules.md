> \[!warning\] A Work on Module Systems
> `vi.mock` works only for modules that were imported with the `import` keyword. It doesn't work with `require`.

Vitest provides `vi.mock`, which allows you to mock any import that you provide a path for. It's go the following signature:

```ts
(path: string, factory?: () => unknown) => void
```

The `factory` is a function that you provide as a substitute for whatever _really_ resides at the file path. You'll that it's optional. Here is how it goes down:

1. If you provided a `factory` function, it will use the return value of that function as the replacement for whatever module lives at `path`.
1. If you don't provide a factory, but you do have a `__mocks__ ` directory at the same location and an alternative file in that `__mocks__ ` directory, then it will substiture that in.
1. Vitest will use it's automocking algorithm.

# Automocking Algorithm

If you don't provide a factory, Vitest will employ its [automocking algorithm](https://vitest.dev/guide/mocking.html#automocking-algorithm):

- All arrays will be emptied.
- All primitives and collections will stay the same.
- All objects will be deeply cloned.
- All instances of classes and their prototypes will be deeply cloned.

> \[!todo\] Explain the automocking algorithm
> You'll probably want to add some kind of visual as well as an example in code and some tests that prove your assumptions.

# `vi.doMock`

[`vi.doMock`](https://vitest.dev/api/vi.html#vi-domock) is basically the same as `vi.mock` except for the fact that it's _not_ hoisted to the top, which means you have access to variables. The _next_ import of that module will be mocked.

> \[!todo\] Explain `vi.mock` hoisting
> Show with some concrete examples the difference between `vi.mock` and `vi.doMock`.
