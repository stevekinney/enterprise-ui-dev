import { describe, it, expect } from 'vitest';
import { embolden, makeLouder, repeat } from './words';

describe('repeat', () => {
  it('should repeat the word three times by default', () => {
    expect(repeat('lol')).toBe('lollollol');
  });

  it('should repeat the word a certain number of times', () => {
    expect(repeat('lol', 2)).toBe('lollol');
  });
});

describe('makeLouder', () => {
  it('should repeat the word three times by default', () => {
    expect(makeLouder('lol')).toBe('LOL');
  });
});

describe('embolden', () => {
  it('should wrap a fiven string in <b> tags like it is 1999', () => {
    expect(embolden('lol')).toBe('<b>lol</b>');
  });
});
