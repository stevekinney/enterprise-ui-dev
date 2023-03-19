import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render, screen } from 'test/utilities';
import ItemList from './item-list';
import { store } from './store';
import { add } from './store/items-slice';

it('should render', async () => {
  render(<ItemList title="Unpacked Items" packed={false} />, {
    wrapper: ({ children }: PropsWithChildren) => (
      <Provider store={store}>{children}</Provider>
    ),
  });
});

it('should display items', () => {
  store.dispatch(add({ name: 'Lucky beanie' }));

  render(<ItemList title="Unpacked Items" packed={false} />, {
    wrapper: ({ children }: PropsWithChildren) => (
      <Provider store={store}>{children}</Provider>
    ),
  });

  expect(screen.getByTestId('unpacked-items-list')).toMatchInlineSnapshot(`
    <ul
      class="flex flex-col gap-2"
      data-testid="unpacked-items-list"
    >
      <li
        class="flex items-center gap-2"
      >
        <input
          class="focus:bg-red-500"
          id="toggle-1"
          type="checkbox"
        />
        <label
          class=""
          for="toggle-1"
        >
          Lucky beanie
        </label>
        <input
          class="py-0 text-sm hidden"
          id="edit-1"
          value="Lucky beanie"
        />
        <div
          class="flex gap-2"
        >
          <button
            aria-label="Edit Lucky beanie"
            class="px-2 py-0 text-xs"
          >
            ✍️ Edit
          </button>
          <button
            aria-label="Remove Lucky beanie"
            class="px-2 py-0 text-xs"
          >
            🗑 Remove
          </button>
        </div>
      </li>
    </ul>
  `);
});
