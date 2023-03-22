A lot of UIs tend to show stuff like time and dates. As we've discussed previously, we want our tests to be consistent. As [Steve Miller once wrote](https://www.youtube.com/watch?v=HlItAutxJzk&list=OLAK5uy_lRxgtVPfsBuzpgFdYdFi0Ej0J2mNwzz2A), (but let's be honest, you 're thinking of [Seal's version from the Space Jam soundtrack](https://www.youtube.com/watch?v=gxbBp9SH81U)):

> Time keeps on slipping into the future.
> Time keeps on slipping, slipping, slipping into the future.

Under the hood, Vitest uses [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).

Typically, if you need to control time in your tests, you'd opt in to using Sinon's fake timers before the test suite in question and then you'd be a good time traveler and try to put everything back the way you found it when you're all done.

```ts
beforeEach(() => {
  // Take control of time.
  vi.useFakeTimers();
});

afterEach(() => {
  // Put things back the way you found it.
  vi.useRealTimers();
});
```

`useFakeTimers()` replaces the global `setTimeout`, `clearTimeout`, `setInterval`, `setImmediate`, `clearImmediate`, `process.hrtime`, `performance.now`, and `Date` with a custom implementation that you can control.

It returns a `clock` object that starts at the Unix epoch (i.e. `0`). If you want to start time at some other point, you can pass it a different integer, but I'm going to argue that you're better off using `setSystemTime`, as we'll see below.

```ts
vi.useFakeTimers(1677952591024);
```

Time is also effectively frozen unless you choose to advance it yourself. If you want time to move forward as it normally does, you can pass a option to `useFakeTimers()`.

```ts
vi.useFakeTimers({ shouldAdvanceTime: true });
```

# Manipulating time

## Setting the Time

Now in any test, you can manually set the time to whatever you need it to be.

```ts
const date = new Date(2012, 1, 1, 13);
vi.setSystemTime(date);
```

- You can get access to the mocked time using `vi.getMockedSystemTime()`.
- You can get access to the _real_ time using `vi.getRealSystemTime()`. (I cannot even come up with a reason why you'd want to do this. I'm just mentioning it in the name of completeness).

## Advancing Time Forward

These are helpful when setting timers like `setInterval` and `setTimeout`.

- `vi.advanceTimersByTime`, `vi.advanceTimersByTimeAsync`: Moves the current time forward by a specified number of milliseconds.
- `vi.advanceTimersToNextTimer`, `vi.advanceTimersToNextTimerAsync`: Advances time until the next timer is fired.
- `vi.getTimerCount`: Returns a count of the number of remaining timers.
- `vi.runAllTimers`, `vi.runAllTimersAsync`: Run all of the timers. (This one will throw an an error at 10,000 tries if you have a `setInterval` that is never cleared.)
- `vi.runAllTicks`: Call every microtask created by `process.nextTick`.

## Cleaning Up

- `vi.clearAllTimers`: Removes any timers that are scheduled to run.
- `vi.restoreCurrentDate`: Put the original `Date` object back where it belongs.
- `vi.useRealTimers`: When all of your timers have run out, this method will return all of your mocked timers back to their original implementations.

# Examples and Exercises

- Write some tests for relative time.
- Write some tests for a modal that should call a teardown funciton after a certain number of miliseconds.
