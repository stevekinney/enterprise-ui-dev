import { describe, it } from 'vitest';

const sleep = (time = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(time);
      resolve();
    }, time);
  });
};

//run in series
describe('sleep', () => {
  it('should sleep for 500ms', async () => {
    await sleep(500);
    expect(true).toBe(true);
  });

  it('should sleep for 750ms', async () => {
    await sleep(750);
    expect(true).toBe(true);
  });

  it('should sleep for 1000ms', async () => {
    await sleep(1000);
    expect(true).toBe(true);
  });

  it('should sleep for 1500ms', async () => {
    await sleep(1500);
    expect(true).toBe(true);
  });
});

//run in concurrent
describe.concurrent('concurrent sleep', () => {
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
