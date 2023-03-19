# Getting Started with Component Testing

Let's start with the world's simplest test in `src/examples/counter/counter.test.tsx`:

```ts
test('it should render the component', () => {
  render(<Counter />);
});
```

And wow, it blows up already! If we look closely, we'll see the following error: `ReferenceError: document is not defined`.

This makes sense. Vitest runs in one of four environments:

- `node`: The default environment—and the reason why `document` is not defined.
- `jsdom`: Uses [`jsdom`](https://npm.im/jsdom) to emulate all of the stuff that you commonly find in the browser, but not in Node.
- `happy-dom`: Uses [`happy-dom`](https://npm.im/happy-dom) to emulate _most_ of the browser APIs. It's allegedly faster than `jsdom`.
- `edge-runtime`: Emulates [Vercel](https://vercel.com)'s [edge runtime](https://vercel.com/blog/introducing-the-edge-runtime).

Some **quick notes**:

- You need to have these dependencies install in your `package.json`. They do _not_ come bundled with Vitest.
- I want to use `happy-dom` because it's allegedly faster, but—as of this writing—I've found that `jsdom` is still more reliable. Your mileage may vary. Try both out and see what works for you.

# Specifying an Environment

We can specify which environment we want by adding a comment to the top of the file.

```ts
// @vitest-environment jsdom
```

Everything should pass in our very simple test.

# `render`

`render` is a utility that mounts the component and lets you play around with it.

It returns an object with the following properties:

- `rerender`: Triggers a re-render. The props will be passed to your `renderHook` callback.
- `result`: The component that you rendered. This has a `current` property, just like a `ref` in React.
- `unmount`: Unmounts the component. This could be useful if you want to test any of the cleanup callbacks that are returned from `useEffect`.

# Getting an Element

Now that we've mounted the component, we can access a particular node that we want to look at.

```ts
test('it should render the component', () => {
  render(<Counter />);
  screen.getByTestId('current-count');
});
```

This test will pass because it doesn't fail. If we misspell `current-count`, we can watch the test fail because it cannot find that element. In some cases, this might be enough for you. But, let's keep going.

It will also fail if there are more than one matching elements. If you _want_ to find more than one matching element, then you can use `getAllByTestId`, which will return an array.

Now, if we want to make sure that the count is correct, we can add that expectation to our test.

```ts
test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.innerText).toBe('0');
});
```

# Towards Better Test Error Messages

Let's make our test fail for a moment:

```ts
test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.textContent).toBe('1');
});
```

Now, we know this won't work because we just validated that the counter starts at 0. We'll see an error message that looks something like this:

```ts
AssertionError: expected '0' to be '1' // Object.is equality
 ❯ src/components/counter/counter.test.tsx:10:34
      8|   render(<Counter />);
      9|   const currentCount = screen.getByTestId('current-count');
     10|   expect(currentCount.textContent).toBe('1');
       |                                  ^
     11| });
     12|

  - Expected   "1"
  + Received   "0"
```

That's not bad, but we can do better. Let's look at [extending the built-in matchers for `expect` with some fancy ones that make it easier to make assertions against DOM nodes](Extending%20Matchers%20for%20Testing%20Library.md).
