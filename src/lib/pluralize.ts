export const pluralize = (
  text: string,
  items: unknown[] | number | string,
): string => {
  const n = Array.isArray(items) ? items.length : Number(items);
  if (n === 1) return text;
  return `${text}s`;
};
