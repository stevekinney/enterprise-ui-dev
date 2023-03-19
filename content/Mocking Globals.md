[`vi.stubGlobal`](https://vitest.dev/api/vi.html#vi-stubglobal) basically does what it says on the packaging. It takes two arguments:

1. The key on the global object that you want to stub.
1. An mock implementation to use.

```ts
import { vi } from 'vitest';

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
```
