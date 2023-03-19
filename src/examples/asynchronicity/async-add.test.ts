import { it, expect } from 'vitest';

const addAsync = (a: number, b: number) => Promise.resolve(a + b);
const onlyEvenNumbers = (a: number) => {
  if (a % 2 === 0) return Promise.resolve(a);
  return Promise.reject(a);
};

it.fails("fails if you don't use an async function", () => {
  const result = addAsync(2, 3);
  expect(result).toBe(5);
});

it('passes if use an `async/await`', async () => {
  const result = await addAsync(2, 3);
  expect(result).toBe(5);
});

it('passes if we expect it to resolve', () => {
  const result = addAsync(2, 3);
  expect(result).resolves.toBe(5);
});

it('passes if we expect to reject', () => {
  const result = onlyEvenNumbers(5);
  expect(result).rejects.toBe(5);
});

it('allows us to catch the error in an async/await', async () => {
  expect.assertions(1);
  try {
    await onlyEvenNumbers(5);
  } catch (error) {
    expect(error).toBe(5);
  }
});
