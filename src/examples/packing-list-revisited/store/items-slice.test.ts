import reducer, {
  add,
  remove,
  toggle,
  markAllAsUnpacked,
  update,
} from './items-slice';

/*
 * Note: These tests are a *bit* flawed in ways that we'll explore later, but
 * bonus points if you can figure it out beforehand.
 */

it('returns an empty object as the initial state', () => {
  expect(reducer(undefined, { type: 'noop' })).toEqual({});
});

it('supports adding an item', () => {
  expect(reducer({}, add({ name: 'iPhone' }))).toEqual({
    1: {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  });
});

it('supports removing an item', () => {
  const initialState = {
    1: {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  };

  expect(reducer(initialState, remove({ id: '1' }))).toEqual({});
});

it('supports toggling an item', () => {
  const initialState = {
    1: {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  };

  expect(reducer(initialState, toggle({ id: '1' }))).toEqual({
    1: {
      id: '1',
      name: 'iPhone',
      packed: true,
    },
  });
});

it('supports updating an item', () => {
  const initialState = {
    1: {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
  };

  expect(
    reducer(initialState, update({ id: '1', name: 'Samsung Galaxy S23' })),
  ).toEqual({
    1: {
      id: '1',
      name: 'Samsung Galaxy S23',
      packed: false,
    },
  });
});

it('supports marking all items as unpacked', () => {
  const initialState = {
    1: {
      id: '1',
      name: 'iPhone',
      packed: true,
    },
    2: {
      id: '2',
      name: 'iPhone Charger',
      packed: true,
    },
  };

  expect(reducer(initialState, markAllAsUnpacked())).toEqual({
    1: {
      id: '1',
      name: 'iPhone',
      packed: false,
    },
    2: {
      id: '2',
      name: 'iPhone Charger',
      packed: false,
    },
  });
});
