const isMultipleOf = (multiple: number, factor: number): boolean => {
  return factor % multiple === 0;
};

export const toFizzBuzz = (i: number): number | string => {
  const isMultipleOfThree = isMultipleOf(3, i);
  const isMultipleOfFive = isMultipleOf(5, i);

  if (isMultipleOfThree && isMultipleOfFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz';

  return i;
};
