import { beforeEach, describe, it, expect } from 'vitest';
import { createPolygon, Polygon } from './polygon';

type ContextWithPolygon = {
  polygon: Polygon;
};

describe('createPolygon', () => {
  it('should create an object that is an instance of the Polygon class', () => {
    const polygon = createPolygon('triangle', 20);
    expect(polygon).toBeInstanceOf(Polygon);
  });
});

describe('Polygon', () => {
  it('should throw an error if given less than 3 sides', () => {
    expect(() => new Polygon(2, 10)).toThrowError(
      'must have three or more sides',
    );
  });

  it.each([
    [3, 'triangle'],
    [4, 'quadrilateral'],
    [5, 'pentagon'],
    [6, 'hexagon'],
    [7, 'heptagon'],
    [8, 'octagon'],
    [9, 'nonagon'],
    [10, 'decagon'],
  ])('a polygon with %i sides should be consider a %s', (sides, type) => {
    const polygon = new Polygon(sides, 10);
    expect(polygon.type).toBe(type);
  });

  it.each([
    { sides: 3, type: 'triangle' },
    { sides: 4, type: 'quadrilateral' },
    { sides: 5, type: 'pentagon' },
    { sides: 6, type: 'hexagon' },
    { sides: 7, type: 'heptagon' },
    { sides: 8, type: 'octagon' },
    { sides: 9, type: 'nonagon' },
    { sides: 10, type: 'decagon' },
  ])(
    'a polygon with $sides sides should be considered a $type',
    ({ sides, type }) => {
      const polygon = new Polygon(sides, 10);
      expect(polygon.type).toBe(type);
    },
  );
});

describe.each`
  polygonType        | sides | lengthOfSide | sumOfAngles | perimeter | area
  ${'triangle'}      | ${3}  | ${10}        | ${180}      | ${30}     | ${43.3012701892219}
  ${'quadrilateral'} | ${4}  | ${10}        | ${360}      | ${40}     | ${100}
  ${'pentagon'}      | ${5}  | ${10}        | ${540}      | ${50}     | ${172.047740058897}
  ${'hexagon'}       | ${6}  | ${10}        | ${720}      | ${60}     | ${259.807621135332}
  ${'heptagon'}      | ${7}  | ${10}        | ${900}      | ${70}     | ${363.391244400159}
  ${'octagon'}       | ${8}  | ${10}        | ${1080}     | ${80}     | ${482.842712474619}
  ${'nonagon'}       | ${9}  | ${10}        | ${1260}     | ${90}     | ${618.18241937729}
  ${'decagon'}       | ${10} | ${10}        | ${1440}     | ${100}    | ${769.420884293813}
`(
  '$polygonType',
  ({ polygonType, sides, lengthOfSide, sumOfAngles, perimeter, area }) => {
    beforeEach<ContextWithPolygon>((context) => {
      context.polygon = createPolygon(polygonType, lengthOfSide);
    });

    it<ContextWithPolygon>(`should have ${sides} sides`, async ({
      polygon,
    }) => {
      expect(polygon.sides).toBe(sides);
    });

    it<ContextWithPolygon>(`should have the correct type`, async ({
      polygon,
    }) => {
      expect(polygon.type).toBe(polygonType);
    });

    it<ContextWithPolygon>(`should have the correct sum of its angles`, async ({
      polygon,
    }) => {
      expect(polygon.sumOfAngles).toBe(sumOfAngles);
    });

    it<ContextWithPolygon>(`should have the correct perimeter`, async ({
      polygon,
    }) => {
      expect(polygon.perimeter).toBe(perimeter);
    });

    it<ContextWithPolygon>(`should have the correct area`, async ({
      polygon,
    }) => {
      expect(polygon.area).toBeCloseTo(area);
    });

    it<ContextWithPolygon>(`should generate JSON that matches the snapshot`, ({
      polygon,
    }) => {
      expect(polygon.toJSON()).toMatchSnapshot();
    });
  },
);
