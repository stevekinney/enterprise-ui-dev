import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

expect.extend(toHaveNoViolations);

// This test does not guarantee accessibility
// see https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
it('should be accessible', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
