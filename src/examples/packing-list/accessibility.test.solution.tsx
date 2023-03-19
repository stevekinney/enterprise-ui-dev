import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import PackingList from '.';

expect.extend(toHaveNoViolations);

it('should have no accessibility violations', async () => {
  const { container } = render(<PackingList />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
