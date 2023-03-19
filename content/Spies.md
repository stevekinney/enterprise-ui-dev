Spies are useful if you want to:

- Validate that a given function was called.
- Validate that it got the arguments that you expected it to get.

Under hood, Vitest uses [TinySpy](https://github.com/tinylibs/tinyspy), but adds a wrapper to make provide a Jest-compatible API.

Spies are the most useful when you're working with an object and want to see if it's properties were called.

Let's take a look at these ridiculous functions:

```ts
const Arithmetic = {
  add(a: number, b: number) {
    return a + b;
  },

  multiply(a: number, b: number) {
    let result = 0;

    while (b--) {
      result = this.add(result, a);
    }

    return result;
  },

  double(a: number) {
    return this.multiply(a, 2);
  },
};

export default Arithmetic;
```

- `double` calls `multiply`.
- `mulitply` calls `add`… _sometimes_.

## Some Examples

```ts
import { expect, describe, it, vi, afterEach } from 'vitest';

import Arithmetic from '../arithmetic';

describe('Arithmetic.double()', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should double a number', () => {
    expect(Arithmetic.double(4)).toBe(8);
  });

  it('should return zero when doubling zero', () => {
    expect(Arithmetic.double(0)).toBe(0);
  });

  it('should call multiply() exactly once', () => {
    const spy = vi.spyOn(Arithmetic, 'multiply');

    Arithmetic.double(4);

    expect(spy).toHaveBeenCalledOnce();
  });

  it('should call multiply() with the correct arguments', () => {
    const spy = vi.spyOn(Arithmetic, 'multiply');

    Arithmetic.double(4);

    expect(spy).toBeCalledWith(4, 2);
  });

  it('should call add() at some point', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.double(4);

    expect(spy).toHaveBeenCalled();
  });
});

describe('Arithmetic.multiply()', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should correctly double numbers', () => {
    expect(Arithmetic.multiply(4, 3)).toBe(12);
  });

  it('should call multiply()', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should call add()', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveBeenLastCalledWith(8, 4);
  });

  it('should call multiply', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveLastReturnedWith(12);
  });
});
```

# Expect Methods

- `toHaveBeenCalled()`: Passes if the spy was ever called.
- `toHaveBeenCalledTimes(times)`: Passes if the spy was called the correct number of times.
- `toHaveBeenCalledWith(...args)`: Passes if the function has _every_ been called with the arguments that you specify.
- `toHaveBeenLastCalledWith`: Passes if the function was most recently called with the arguments that you specify.
- `toHaveBeenNthCalledWith(time, ...args)`: Passes if the function was called whichever time you specified with the arguments you specified.
- `toHaveReturned()`: Passes if the function returned (e.g., it didn't throw an error).
- `toHaveReturnedTimes(times)`: Passes if the function return however many times you specify.
- `toHaveReturnedWith(value)`: Passes if the function has ever successfully returned with the value you specify.
- `toHaveLastReturnedWith(value)`: Passes if the function most recently returned with value you specify.
- `toHaveNthReturnedWith(time, value)`: Passes if the function returned whichever time you specified with the value you specified.
