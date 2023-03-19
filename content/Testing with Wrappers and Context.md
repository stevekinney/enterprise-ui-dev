Testing a basic little counter is all well and good, but what about testing something that is a bit more intertwined? For example: What if we need to test something that is using the Context API or Redux?

It's a small enough application, so we _could_ just render it and test it at a high-level like we did [in the previous example](Component%20Testing%20Solution.md).

That said, the reason that I whipped up this example is to use it as a case study for how to deal with smaller pieces of our application that are have dependencies on the larger application. In this case, we've got a React Redux provide that the `<ItemList />` component relies on—and cannot render without. So, how do we test that?

Consider this disaster waiting to happen:

```ts
it('should render', async () => {
  render(<ItemList title="Unpacked Items" packed={false} />);
});
```

This will blow up. I'll save you the effort of scrolling up. Here is the error:

> `Error: Uncaught [Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>]`

And, I mean, this makes sense. We didn't wrap it in a `<Provider />`.

Luckily, React Testing Library Supports passing in a `wrapper` as an option.

```ts
import { render } from 'test/utilities';
import ItemList from './item-list';
import { ItemsProvider } from './store';

it('should render', async () => {
  render(<ItemList title="Unpacked Items" packed={false} />, {
    wrapper: ItemsProvider,
  });
});
```

This test will now render appropriately. Remember how we made our own custom version of `render`? Well, you _could_ do that to always include a certain set of providers as well. (**Note**: I'm not going to right now because I'm working with multiple different example applications.)

It would look something like this:

```ts
export const render = (ui: ReactElement, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, { wrapper: ItemsProvider, ...options }),
    user: userEvent.setup(),
  };
};
```

And, now it would be included by default. That said, we're still not out of the woods yet. This all works as expected, but it's _difficult_ to create the situations that we want to provide.

Let's talk about some [possible solutions](Strategies%20for%20Testing%20with%20State%20from%20the%20Context%20API.md).
