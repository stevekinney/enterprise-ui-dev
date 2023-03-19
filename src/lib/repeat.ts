export const repeat = <T>(times: number, callback: (i: number) => T): T[] => {
  return [...Array(times).keys()].map((i) => callback(i + 1));
};
