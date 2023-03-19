import { getArea } from './get-area';

type PolygonType = keyof typeof namedPolygons;
type NamedPolygon<T extends PolygonType> = {
  type: T;
  sides: (typeof namedPolygons)[T];
} & Polygon;

export type Triangle = NamedPolygon<'triangle'>;
export type Quadrilateral = NamedPolygon<'quadrilateral'>;
export type Pentagon = NamedPolygon<'pentagon'>;
export type Hexagon = NamedPolygon<'hexagon'>;
export type Heptagon = NamedPolygon<'heptagon'>;
export type Octagon = NamedPolygon<'octagon'>;
export type Nonagon = NamedPolygon<'nonagon'>;
export type Decagon = NamedPolygon<'decagon'>;

const namedPolygons = {
  triangle: 3,
  quadrilateral: 4,
  pentagon: 5,
  hexagon: 6,
  heptagon: 7,
  octagon: 8,
  nonagon: 9,
  decagon: 10,
} as const;

export class Polygon {
  sides: number;
  lengthOfSides: number;

  constructor(sides: number, lengthOfSides: number) {
    if (sides < 3) throw new Error('Polygons must have three or more sides.');
    this.sides = sides;
    this.lengthOfSides = lengthOfSides;
  }

  get type(): PolygonType | undefined {
    if (this.sides === 3) return 'triangle';
    if (this.sides === 4) return 'quadrilateral';
    if (this.sides === 5) return 'pentagon';
    if (this.sides === 6) return 'hexagon';
    if (this.sides === 7) return 'heptagon';
    if (this.sides === 8) return 'octagon';
    if (this.sides === 9) return 'nonagon';
    if (this.sides === 10) return 'decagon';
  }

  get sumOfAngles() {
    return 180 + (this.sides - 3) * 180;
  }

  get perimeter() {
    return this.lengthOfSides * this.sides;
  }

  get area() {
    return getArea(this.sides, this.lengthOfSides);
  }

  toJSON() {
    return {
      sides: this.sides,
      lengthOfSides: this.lengthOfSides,
      sumOfAngles: this.sumOfAngles,
      perimeter: this.perimeter,
      area: this.area,
    };
  }
}

export const createPolygon = (type: PolygonType, lengthOfSides: number) => {
  return new Polygon(namedPolygons[type], lengthOfSides);
};
