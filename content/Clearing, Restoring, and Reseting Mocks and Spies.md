Generally speaking, you want to put stuff back the way you found it in order to make sure that you have good test isolation things don't get weird when tests have long-lasting side effects that cause other tests to fail for no particularly good reason.

# Object Methods

- `spy.mockClear()`: Clears out all of the information about how it was called and what it returned. This is effectively the same as setting `spy.mock.calls` and `spy.mock.results` back to empty arrays.
- `spy.mockReset()`: In addition to doing what `spy.mockClear()`, this method replaces the inner implementation with an empty function.
- `spy.mockRestore()`: In addition to doing what `spy.mockReset()` does, it replaces the implementation with the original functions.

# Mock Lifecycle Methods

You'd typically put these in an `afterEach` block within your test suite.

- `vi.clearAllMocks`: Clears out the history of calls and return values on the spies, but does _not_ reset them to their default implementation. This is effectively the same as calling `.mockClear()` on each and every spy.
- `vi.resetAllMocks`: Calls `.mockReset()` on all the spies. It will replace any mock implementations with an empty function.
- `vi.restoreAllMocks`: Calls `.mockRestore()` on each and every mock.
