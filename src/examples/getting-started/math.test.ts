import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should not add two numbers incorrectly', () => {
    expect(add(2, 2)).not.toBe(5);
  });
});

describe('subtract', () => {
  it('should subtract the subtrahend from the minuend', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should not subtract two numbers incorrectly', () => {
    expect(subtract(4, 2)).not.toBe(1);
  });
});

describe('multiply', () => {
  it('should multiply the multiplicand by the multiplier', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('should not multiply two numbers incorrectly', () => {
    expect(multiply(4, 2)).not.toBe(1000);
  });
});

describe('divide', () => {
  it('should multiply the multiplicand by the multiplier', () => {
    expect(divide(12, 4)).toBe(3);
  });

  it('should not multiply two numbers incorrectly', () => {
    expect(multiply(4, 2)).not.toBe(1000);
  });
});
