import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type Args = Parameters<typeof renderComponent>;

/**
 * Wraps the RTL render function with a userEvent user
 */
export const render = (ui: Args[0], options?: Args[1]) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};
