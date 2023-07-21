import { test, expect, vi, afterEach, beforeEach } from 'vitest';
import { render } from 'test/utilities';
import TimeZone from '.';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(1679492355195);
  // vi.setSystemTime(new Date(2012,9,19));
});

afterEach(() => {
  vi.useRealTimers();
});

/*
beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(1679492355195);
});
*/

test('it should render successfully', () => {
  render(<TimeZone />);
});

test('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});
