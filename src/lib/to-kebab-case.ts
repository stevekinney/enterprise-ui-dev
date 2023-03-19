export const toKebabCase = (s: string): string => {
  return s.toLowerCase().replace(/\s/g, '-');
};
