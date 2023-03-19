import { describe, expect, it } from 'vitest';
import { exponent, square, cube } from './exponent';
import { multiply } from './math';

describe('exponent', () => {
  it('should correctly calcuate the exponent of a number', () => {
    expect(exponent(4, 2)).toBe(Math.pow(4, 2));
  });
});

describe('square', () => {
  it('should correctly calcuate the square of a number', () => {
    expect(square(4)).toBe(Math.pow(4, 2));
  });

  it('should be the same as multiplying a number by itself', () => {
    expect(square(8)).toBe(multiply(8, 8));
  });
});

describe('cube', () => {
  it('should correctly calcuate the cube of a number', () => {
    expect(cube(2)).toBe(Math.pow(2, 3));
  });
});
