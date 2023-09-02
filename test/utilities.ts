import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type RenderArgs = Parameters<typeof renderComponent>;

export * from '@testing-library/react';

/**
 * Augments the RTL render with a userEvent user
 */
export const render = (ui: RenderArgs[0], options?: RenderArgs[1]) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};
