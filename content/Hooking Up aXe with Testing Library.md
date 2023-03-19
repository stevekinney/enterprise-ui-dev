I created more inputs than I know what to do with in `src/examples/obstacle-course`. Ideally, we'd love something that enforces whether or not or components are accessible.

Lucky for us, we can hook up aXe to Testing Library and run automated tests that our elements are accessible.

```ts
import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

expect.extend(toHaveNoViolations); // This *could* go in `test/setup`.

it('should be accessible', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
```

aXe adds an additional matcher called `toHaveNoViolations`.

# Experiment Time

Can you set this up in the Packing List application?
