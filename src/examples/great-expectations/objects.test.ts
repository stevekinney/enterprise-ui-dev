import { describe, expect, test } from 'vitest';

describe('toBe', () => {
  test.fails('objects should not be strictly equal', () => {
    expect({ a: 1 }).toBe({ a: 1 });
  });

  test.fails('arrays should be strictly equal', () => {
    expect([1, 2, 3]).toBe([1, 2, 3]);
  });

  test.fails('functions should to be strictly equal', () => {
    expect(() => {}).toBe(() => {});
  });
});

describe('toEqual', () => {
  test('similar objects should pass with #toEqual', () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  test('similar nested objects should pass with #toEqual', () => {
    expect({ a: 1, b: { c: 2 } }).toEqual({ a: 1, b: { c: 2 } });
  });

  test('similar arrays should pass with #toEqual', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  test('similar multi-dimensional arrays should pass with #toEqual', () => {
    expect([1, [2, 3]]).toEqual([1, [2, 3]]);
  });

  test('functions should to be strictly equal if compared by reference', () => {
    const fn = () => {};
    expect(fn).toBe(fn);
  });
});
