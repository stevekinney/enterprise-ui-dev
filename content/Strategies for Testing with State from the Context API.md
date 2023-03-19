Okay, so we can wrap any component we want to set test in our state management system of choice, but setting that state could be difficult. We _could_ try to manually create the state every time.

```ts
it('should display items', () => {
  store.dispatch(add({ name: 'Lucky beanie' }));

  render(<ItemList title="Unpacked Items" packed={false} />, {
    wrapper: ItemsProvider,
  });

  // (Your assertions here.)
});
```

But, there are a few problems:

- This is tedious.
- Similar to how hot module reloading works, React Testing Library will remount the components, but it will not clear out provider state. This means, that not only would we have to go through the tedium of setting all of that state ourselves, we're also going to have to make sure we clean up after ourselves.

And, this my friends is typically where our hopes and dreams about creating a solid test suite fall apart. Or, is it?

There are a few ways that we can navigate around this:

- Modifying our code for the sake of our tests.
- Look into mocking and stubbing the external world around the components that we want to test.
- Rethink our architecture.

I want to add a certain amount of judgement to each of those options, but depending on the reality of your particular code base, any one of those might be the right short-term choice. So, we'll talk about them all.
