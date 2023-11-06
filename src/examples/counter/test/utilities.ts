import userEvent from '@testing-library/user-event';
import React from 'react';
import { render as renderComponent } from '@testing-library/react';

export const render = (
  ui: React.ReactElement,
  options?: Parameters<typeof renderComponent>[1],
) => {
  const user = userEvent.setup();
  const result = renderComponent(ui, options);
  return {
    ...result,
    user,
  };
};

/**
 * For a complete example, see: test/utilities.ts
 */
