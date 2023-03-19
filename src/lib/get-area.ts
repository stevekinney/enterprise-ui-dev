/**
 * Calculates the area of a regular polygon.
 * @param sides The number of sides of the polygon.
 * @param lengthOfSides The length of each side.
 * @returns The area of the polygon.
 */
export const getArea = (sides: number, lengthOfSides: number) => {
  return (Math.pow(lengthOfSides, 2) * sides) / (4 * Math.tan(Math.PI / sides));
};
