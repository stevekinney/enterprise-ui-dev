import { it, expect, test } from 'vitest';

it('should work', () => {
  expect(true).toBe(true);
});

test('works witn "test" as well', () => {
  expect(false).not.toBe(true);
});

it.fails('should be able to expect a test to fail', () => {
  expect(false).toBe(true);
});

test('works when returning a promise', () => {
  return new Promise((done) => {
    setTimeout(() => {
      expect('This should fail.').not.toBe('Totally not the same.');
      done(null);
    }, 0);
  });
});

// npx vitest --mode=development --run --reporter=verbose
test.runIf(process.env.NODE_ENV === 'development')(
  'it should run in development',
  () => {
    expect(process.env.NODE_ENV).toBe('development');
  },
);

// npx vitest --run --reporter=verbose
test.skipIf(process.env.NODE_ENV !== 'test')('it should run in test', () => {
  expect(process.env.NODE_ENV).toBe('test');
});
