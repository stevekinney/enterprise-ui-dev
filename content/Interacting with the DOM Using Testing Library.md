Okay, mounting a component is great and wonderful, but let's say we want to actually—you know—_do something_ to that component that we just mounted? (Wild, I know.)

Let's look at an example where maybe we want to click the "Increment" button and verify that the counter incremented.

```ts
test('it should increment with the "Increment" button is pressed', () => {
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  fireEvent.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});
```

Two tasting notes:

1. We were able to look for the button on the `document.body` by looking for it's `role`, which on `button` elements is determined by it's text content.
1. We used `fireEvent` to dispatch a `click` event to that button.

[Here is a list](Events%20Supported%20by%20fireEvent.md) of _all_ of the events that you can fire with `fireEvent`. I looked it up in the source code. You can thank me later.

It's useful to to use the `role` as opposed to the actual HTML element in the name of testing our application as a user might experience it. Most of the built-in HTML attributes have a pre-assigned role. So, this is not necessarily something that you need to to take on yourself. You can check out the full list [here](https://www.w3.org/TR/html-aria/#docconformance). You can also read more about the options that you can pass [here](https://testing-library.com/docs/queries/byrole#options).

If you want to see _all of the events_ supported by `fireEvent`, I made a list for you: [Events Supported by `fireEvent`](Events%20Supported%20by%20fireEvent.md).

It turns out that we can improve on this by using a companion library called [`@testing-library/user-event`](https://www.npmjs.com/package/@testing-library/user-event). Let's take [a look at how to do that](user-event.md).
