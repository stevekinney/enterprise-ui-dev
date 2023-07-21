import { expect, describe, it, vi, afterEach } from 'vitest';
import Arithmetic from './arithmetic';

describe('Arithmetic.double()', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should double a number', () => {
    expect(Arithmetic.double(4)).toBe(8);
  });

  it('should return zero when doubling zero', () => {
    expect(Arithmetic.double(0)).toBe(0);
  });

  it('should call multiply() exactly once', () => {
    const spy = vi.spyOn(Arithmetic, 'multiply');

    Arithmetic.double(4);

    expect(spy).toHaveBeenCalledOnce();
  });

  it('should call multiply() with the correct arguments', () => {
    const spy = vi.spyOn(Arithmetic, 'multiply');

    Arithmetic.double(4);

    expect(spy).toBeCalledWith(4, 2);
  });

  it('should call add() at some point', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.double(4);

    expect(spy).toHaveBeenCalled();
  });
});

describe('Arithmetic.multiply()', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should correctly double numbers', () => {
    expect(Arithmetic.multiply(4, 3)).toBe(12);
  });

  it('should call multiply()', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should call add()', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveBeenLastCalledWith(8, 4);
  });

  it('should call multiply', () => {
    const spy = vi.spyOn(Arithmetic, 'add');

    Arithmetic.multiply(4, 3);

    expect(spy).toHaveLastReturnedWith(12);
  });
});
