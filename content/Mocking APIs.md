A better alternative is just mock out the entire network layer—since you don't control it anyway.

For this, we'll use a library called [Mock Service Worker](https://mswjs.io).

```ts
import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.post('/login', async (req, res, ctx) => {
    const { username } = await req.json();

    return res(
      ctx.json({
        username,
        firstName: 'John',
      }),
    );
  }),
);

worker.start();
```

```ts
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { graphql, rest } from 'msw';

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  // ...
];

export const restHandlers = [
  rest.get('https://rest-endpoint.example/path/to/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
];
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
```
