The TL;DR of mocking is that sometimes we need to swap out things we don't control with things that we _do_. For example, it might be outside of the scope of our test to make sure that a third-party API goes down. Or, if that API isn't free, you don't necessarily want to run up a bill every time you run your test suite, right?

You can create a mock function using `vi.fn()` (or, `jest.fn()`), which takes a callback function. If you you don't provide one, it'll just use an empty function as the implementation (e.g. `() => undefined`).

```ts
const getNumber = vi.fn(() => 5000);

const number = getNumber();

expect(number).toBe(5000);
expect(getNumber).toHaveBeenCalled();
expect(number).toHaveReturnedWith(5000);
```

# Methods

- `mockImplementation`: Takes a function that you want your mock function to call whenever it's called.
- `mockImplementationOnce`: Accepts a function that will only be used the _next time_ a function is called.
- `withImplementation`: Overrides the original mock implementation temporarily while the callback is being executed. Calls the function immediately.
- `mockReturnValue`: Nevermind the implementation, we just know we want it to return whatever value.
- `mockReturnValueOnce`: Set the return value—but only the _next time_ it's called.
- `mockResolvedValue`: Sets the value of the promise when it resolves.
- `mockResolvedValueOnce`: Set the resolved value of a promise _next time_ it resolves.
- `mockRejectedValue`: Rejects a promise with the error provided.
- `mockRejectedValueOnce`: Rejects a promise with the error provided _next time_.
- `mockReturnThis`: Sets the value of `this`.
