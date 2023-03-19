export const add = (a: number, b: number): number => a + b;

export const subtract = (minuend: number, subtrahend: number): number =>
  add(minuend, -subtrahend);

export const multiply = (multiplicand: number, multiplier: number): number => {
  let result = 0;

  while (multiplier--) {
    result = add(result, multiplicand);
  }

  return result;
};

export const divide = (dividend: number, denominator: number): number => {
  return dividend / denominator;
};

export const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => total + n, 0);
};

export const average = (...numbers: number[]): number => {
  return divide(sum(...numbers), numbers.length);
};
