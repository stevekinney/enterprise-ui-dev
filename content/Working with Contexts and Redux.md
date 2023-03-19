# Working with Redux Contexts


Back when we were looking at the Packing List application. I noted that these two tests were subtly-flawed.

```ts
it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<Application />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
});

// This test is sublty flawed.
it('removes an item when the remove button is clicked', async () => {
  const { user } = render(<Application />);

  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'iPad Pro');
  await user.click(addNewItemButton);

  const item = screen.getByLabelText('iPad Pro');
  const removeButton = screen.getByRole('button', {
    name: 'Remove iPad Pro',
  });

  await user.click(removeButton);

  expect(item).not.toBeInTheDocument();
});
```

If you want to see _how_ they're flawed. Why don't you go ahead and changed "iPad Pro" to "MacBook Pro".

The problem here is that Testing Library renders a new `<PackingList />` component, but the Context or Store is still in memory and it remembers the _last_ time we added a "MacBook Pro" to that packing list.

This isn't super surprising. It's kind of how hot module reloading works and—besides—closure scope is hard.

# Separating the Component from the Provider

If we look in `index.tsx`, we'll see that the `Provider` is wrapped around the entire application by default. This means, we don't really have a way to separate the two. Unless we make one of course.

```tsx
export const PackingList = () => (
  <Frame>
    <header>
      <h1>Packing List</h1>
    </header>
    <NewItem />
    <section className="flex flex-col gap-8 md:flex-row">
      <ItemList title="Unpacked Items" packed={false} />
      <ItemList title="Packed Items" packed={true} />
    </section>
    <MarkAllAsUnpacked />
  </Frame>
);

const Application = () => {
  return (
    <ItemsProvider>
      <PackingList />
    </ItemsProvider>
  );
};

export default Application;
```

Now, in my tests, I can do something like this.

```ts
render(<PackingList />, { wrapper: ItemsProvider });
```

React Testing Library has the ability to allow you to pass in a wrapper.

This still doesn't really solve my problem since the child components still insist on having a `Provider` available. But, at the very least, I did give myself a way to separate the two—and ideally swap one in for the other.

## Creating a Store

So, in our effort to separate things from each other, we're making good progress. We at least pried the `Provider` apart from `<PackingList />`. But, yo: `Provider` and `store` are still jammed together.

## Using a Higher Order Component to Provide a Fresh Store

Now that we have a more modular system, we can whip up a new store for each test.

```ts
const render: typeof baseRender = (Component, options) => {
  const store = createStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return baseRender(Component, { ...options, wrapper: Wrapper });
};
```

And now everything ought to work as expected.

# Exercise

Can you refactor our custom `render` method in `./test/utilities.ts` to accept a `store` so that we can reuse it in `task-list.test.tsx`?