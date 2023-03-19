import { describe, it, expect } from 'vitest';
import { Polygon } from '$lib/polygon';

describe('Polygon', () => {
  it('should match the snapshot', () => {
    const polygon = new Polygon(8, 10);
    expect(polygon.toJSON()).toMatchSnapshot();
  });
});
