import { test, expect, vi } from 'vitest';
import { render } from 'test/utilities';
import TimeZone from '.';

test('it should render successfully', () => {
  render(<TimeZone />);
});

test.fails('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});
