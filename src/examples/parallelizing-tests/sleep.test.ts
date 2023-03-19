import { describe, it } from 'vitest';

const sleep = (time = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

describe.concurrent('sleep', () => {
  it('should sleep for 500ms', async ({ expect }) => {
    await sleep(500);
    expect(true).toBe(true);
  });

  it('should sleep for 750ms', async ({ expect }) => {
    await sleep(750);
    expect(true).toBe(true);
  });

  it('should sleep for 1000ms', async ({ expect }) => {
    await sleep(1000);
    expect(true).toBe(true);
  });

  it('should sleep for 1500ms', async ({ expect }) => {
    await sleep(1500);
    expect(true).toBe(true);
  });
});
