export const log = (
  channel: 'log' | 'error' | 'warn' | 'info',
  ...args: unknown[]
) => {
  console[channel](...args);
};
