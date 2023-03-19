Where you put this file is up to you, but we _can_ bundle together the act of rendering a component _and_ setting up `user-event`. For example, we could do something like this:

```ts
import type { ReactElement } from 'react';
import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type RenderOptions = Parameters<typeof renderComponent>[1];

export * from '@testing-library/react';

export const render = (ui: ReactElement, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};
```

As of this writing the type for the `options`, which is the optional second argument to `render` is `Omit<RenderOptions, 'queries'>`. I don't care to think about this ever again. So, I chose to use `Parameters<typeof renderComponent>[1]` to define a type that can best be summarized as, "Whatever the second argument to `render` is."
