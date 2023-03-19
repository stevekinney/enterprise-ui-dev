import { test, expect } from 'vitest';

test('Asynchronous code accidentally passes', () => {
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});

test('Asynchronous code has zero expectations', () => {
  expect.assertions(0);
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});

test.fails('Code inside of callback never runs', () => {
  expect.hasAssertions();
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});
