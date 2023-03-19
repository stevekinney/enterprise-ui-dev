import { expect, test } from 'vitest';

test('strings should be strictly equal', () => {
  expect('string').toBe('string');
});

test('numbers should be strictly equal', () => {
  expect(2).toBe(2);
});

test('booleans should be strictly equal', () => {
  expect(true).toBe(true);
  expect(false).toBe(false);
});

test('undefined should be strictly equal to itself', () => {
  expect(undefined).toBe(undefined);
});

test('null should be strictly equal to itself', () => {
  expect(null).toBe(null);
});

test('BigInts should be strickly equal', () => {
  expect(BigInt(Number.MAX_SAFE_INTEGER)).toBe(BigInt(Number.MAX_SAFE_INTEGER));
});
