Snapshot tests are a quick and easy way to make sure that complex output doesn't change from under your nose.

```ts
import { expect, it } from 'vitest';

it('toUpperCase', () => {
  const result = toUpperCase('something cool');
  expect(result).toMatchSnapshot();
});
```

If no snapshot exists, this will write a new file with the output of the function. In future runs, you Vitest (or Jest) will check to make sure that the output is the same. If you _know_ that your output should change you can use the `--update` or `-u` flags from the CLI to update the snapshots.

# Inline Snapshots

For shorter snapshots, you might prefer to just keep snapshot itself in the current test file.

```ts
import { expect, it } from 'vitest';

it('toUpperCase', () => {
  const result = toUpperCase('foobar');
  expect(result).toMatchInlineSnapshot();
});
```

Upon running the tests for the first time, you'll see the result update in your test file itself.

```ts
import { expect, it } from 'vitest';

it('toUpperCase', () => {
  const result = toUpperCase('something cool');
  expect(result).toMatchInlineSnapshot('"SOMETHING COOL"');
});
```

**Advice that you didn't ask for**: Sometimes when I am feeling _real_ lazy, I'll use `toMatchInlineSnapshot()` to get the output, validate that it's what I was expecting, and then changing it to a `toBe()` instead.

# Example: Regular Polygons

Let's recall those tests we wrote for determining the area and parameter of a regular polygon. As far as our code is concerned, our polygons are instances of the `Polygon` class. Let's say, we wanted a `toJSON()` method that boiled them down to simple JavaScript objects that we could easily serialize and send over the wire.

Most of our logic is already tested. We just wan to make sure that any changes that we make the object in the future doesn't accidentally change the serialized object. This is an excellent use case for `toMatchSnapshot()` in our tests. It's a quick and easy way to make sure we didn't _accidentally_ change something.

We might do something like this (as found in `examples/08-snapshot-tests/polygon.complete.test.ts`):

```ts
describe('Polygon', () => {
  it('should match the snapshot', () => {
    const polygon = new Polygon(8, 10);
    expect(polygon.toJSON()).toMatchSnapshot();
  });
});
```

The first time we run these tests, a `__snapshots__` directory will be made right next to the test in question and it will populate the file with something that looks like this:

```
// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`Polygon > should match the snapshot 1`] = `
{
  "area": 482.842712474619,
  "lengthOfSides": 10,
  "perimeter": 80,
  "sides": 8,
  "sumOfAngles": 1080,
}
`;
```

If you logic changes this snapshot for any reason, our test will fail. We can hit `u` while Jest or Vitest is running in order to update the failing snapshots _or_ we can can run our tests with the `-u` command to update them.

# Image Snapshots

You can also use [`jest-image-snapshot`](https://github.com/americanexpress/jest-image-snapshot) to capture image snapshots.

# A Secret

**Nota bene**: This is part of a series of tips and tricks that are definitely bad ideas. That said, they're suprising effective and sometimes you have to break the rules, right?

This is kind of a hack, but it's a hack that is effective—in a pinch. Sometimes, I have to refactor part of the code base that doesn't have tests. Sure, I could handcraft some tests, but I don't always have time for that. If it's something that we _know_ works (even if we don't exactly know _how_ it works, then I'll sometimes start out by using snapshots just to confirm that I didn't break anything.) Alternatively, I might choose to start with an integration test to just verify that everything works at a high level.
