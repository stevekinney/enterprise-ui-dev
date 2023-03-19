import { expect, test } from 'vitest';
import { getArea } from './get-area';

const examples = [
  { sides: 3, lengthOfSides: 10, area: 43.3012701892219 },
  { sides: 4, lengthOfSides: 10, area: 100 },
  { sides: 5, lengthOfSides: 10, area: 172.047740058897 },
  { sides: 6, lengthOfSides: 10, area: 259.807621135332 },
  { sides: 7, lengthOfSides: 10, area: 363.391244400159 },
  { sides: 8, lengthOfSides: 10, area: 482.842712474619 },
  { sides: 9, lengthOfSides: 10, area: 618.18241937729 },
  { sides: 10, lengthOfSides: 10, area: 769.420884293813 },
  { sides: 3, lengthOfSides: 20, area: 173.205080756888 },
  { sides: 4, lengthOfSides: 20, area: 400 },
  { sides: 5, lengthOfSides: 20, area: 688.190960235587 },
  { sides: 6, lengthOfSides: 20, area: 1039.23048454133 },
  { sides: 7, lengthOfSides: 20, area: 1453.56497760064 },
  { sides: 8, lengthOfSides: 20, area: 1931.37084989848 },
  { sides: 9, lengthOfSides: 20, area: 2472.72967750916 },
  { sides: 10, lengthOfSides: 20, area: 3077.68353717525 },
];

test.each(examples)(
  'it should correctly calculate the area for a polygon with $sides sides with a length of $lengthOfSides',
  ({ sides, lengthOfSides, area }) => {
    expect(getArea(sides, lengthOfSides)).toBeCloseTo(area, 2);
  },
);
