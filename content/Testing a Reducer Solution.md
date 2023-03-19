Here is a really simple—and also secretly flawed—solution:

```ts
import reducer, {
  add,
  remove,
  toggle,
  markAllAsUnpacked,
  update,
} from './items-slice';

it('returns an empty object as the initial state', () => {
  expect(reducer(undefined, { type: 'noop' })).toEqual([]);
});

it('supports adding an item', () => {
  expect(reducer([], add({ name: 'iPhone' }))).toEqual([
    expect.objectContaining({ name: 'iPhone' }),
  ]);
});

it('prefixes ids with "item-"', () => {
  expect(reducer([], add({ name: 'iPhone' }))).toEqual([
    expect.objectContaining({ id: expect.stringMatching(/^item-/) }),
  ]);
});

it('defaults new items to a packed status of false', () => {
  expect(reducer([], add({ name: 'iPhone' }))).toEqual([
    expect.objectContaining({ packed: false }),
  ]);
});

it('supports removing an item', () => {
  const state = [
    {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  ];

  const result = reducer(state, remove({ id: '1' }));

  expect(result).toEqual([]);
});

it('supports toggling an item', () => {
  const state = [
    {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  ];

  const result = reducer(state, toggle({ id: '1' }));

  expect(result).toEqual([
    {
      id: '1',
      name: 'iPhone',
      packed: true,
    },
  ]);
});

it('supports updating an item', () => {
  const state = [
    {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  ];

  const result = reducer(
    state,
    update({ id: '1', name: 'Samsung Galaxy S23' }),
  );

  expect(result).toEqual([
    {
      id: '1',
      name: 'Samsung Galaxy S23',
      packed: false,
    },
  ]);
});

it('supports marking all items as unpacked', () => {
  const state = [
    {
      id: '1',
      name: 'iPhone',
      packed: true,
    },
    {
      id: '2',
      name: 'iPhone Charger',
      packed: true,
    },
  ];

  const result = reducer(state, markAllAsUnpacked());

  expect(result).toEqual([
    {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
    {
      id: '2',
      name: 'iPhone Charger',
      packed: false,
    },
  ]);
});
```

We _could_ go even father with the asymmetric matching, but I'm not going to just to prove a point: It's all about the trade offs considering what provides the most value? _If_ we found that this data structure was changing a lot and a little bit more more flexibility was helpful, then I might go for it. But, until then I'm adopting a [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) philosophy about this in a half-baked attempt to set an example for you.

# Next Steps

There are the tests I write when I am developing the code and the tests that I write when I am maintaining the code.

- I might combine the first few tests into one test since if any part of that failed, I'd get a decent failure message.
- If I ended up adding something like `dateCreated` or `lastModified`, you would definitely see me getting a little looser with those later tests.
