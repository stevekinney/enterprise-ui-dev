import { describe, expect, it } from 'vitest';
import { createPolygon, Polygon } from '$lib/polygon';

const polygonNames = [
  [3, 'triangle'],
  [4, 'quadrilateral'],
  [5, 'pentagon'],
  [6, 'hexagon'],
  [7, 'heptagon'],
  [8, 'octagon'],
  [9, 'nonagon'],
  [10, 'decagon'],
];

const polygons = `
  polygonType        | sides | lengthOfSide | sumOfAngles | perimeter | area
  ${'triangle'}      | ${3}  | ${10}        | ${180}      | ${30}     | ${43.3012701892219}
  ${'quadrilateral'} | ${4}  | ${10}        | ${360}      | ${40}     | ${100}
  ${'pentagon'}      | ${5}  | ${10}        | ${540}      | ${50}     | ${172.047740058897}
  ${'hexagon'}       | ${6}  | ${10}        | ${720}      | ${60}     | ${259.807621135332}
  ${'heptagon'}      | ${7}  | ${10}        | ${900}      | ${70}     | ${363.391244400159}
  ${'octagon'}       | ${8}  | ${10}        | ${1080}     | ${80}     | ${482.842712474619}
  ${'nonagon'}       | ${9}  | ${10}        | ${1260}     | ${90}     | ${618.18241937729}
  ${'decagon'}       | ${10} | ${10}        | ${1440}     | ${100}    | ${769.420884293813}
`;

describe('createPolygon', () => {
  it('should create an object that is an instance of the Polygon class', () => {
    const polygon = createPolygon('triangle', 20);
    expect(polygon).toBeInstanceOf(Polygon);
  });
});
