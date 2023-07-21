import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

//https://github.com/dequelabs/axe-core
expect.extend(toHaveNoViolations);

//npx vitest --coverage
//npm test -- --coverage
it('should demonstrate this matcher`s usage', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container);

  //Like <input /> would with violations
  expect(results).toHaveNoViolations();
});
