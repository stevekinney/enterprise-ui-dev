let id = 1;

export const generateId = (): string => `${id++}`;

export const generateNumber = (): number => id++;
