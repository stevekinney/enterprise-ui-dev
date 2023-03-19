import { multiply } from './math';

export const exponent = (base: number, power: number) => {
  let result = base;

  for (let i = 1; i < power; i++) {
    result = multiply(result, base);
  }

  return result;
};

export const square = (base: number) => exponent(base, 2);

export const cube = (base: number) => exponent(base, 3);
