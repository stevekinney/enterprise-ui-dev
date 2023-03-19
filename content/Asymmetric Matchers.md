Why are they called asymmetric matchers? I don't know. But, that's what the [Jest documentation calls them](https://jestjs.io/docs/expect#asymmetric-matchers), so that's what I'm calling them. (This Vitest documentation doesn't call them anything in particular.)

**Philosophy Time™**! Here are two of my many hot takes around testing:

- Tests solely exist to give us confidence that we can make changes to our code base—large or small—without accidentally breaking things.
- Tests that are more annoying then they are helpful will lead to your and your team deleting them and/or just abandoning testing.

They say that "perfection is the of progress." And this is somewhat true for our tests. Our tests exists to give us confidence that we can change our code. If they become too rigid (or brittle), they tend to slow us down more than they speed us up.

Secondly, when a test fails, it would be nice if the failure was laser focused to what went wrong. A minor change might break a whole suite of tests. This could be dozens or even hundreds of tests. Good luck tracking down exactly what the culprit was.

Asymmetric matchers allow you to only focus on the things you care about. For example, consider the following test:

```ts
it('include cool computer scientists by virtue of them being in the club', () => {
  const people: ComputerScientist[] = [];

  addToCoolKidsClub(createComputerScientist('Grace', 'Hopper'), people);
  addToCoolKidsClub(createComputerScientist('Ada', 'Lovelace'), people);
  addToCoolKidsClub(createComputerScientist('Annie', 'Easley'), people);
  addToCoolKidsClub(createComputerScientist('Dorothy', 'Vaughn'), people);
});
```

The [`uuid`](https://npm.im/uuid) library generates a random `id` every time. Sure, there are way to get around this—name mocking and stuff, which we'll talk about later. But generally speaking, we don't really care about the `id`.

Let's say we just cared if they're cool and they they have a first and last name that are strings. (I know, we have TypeScript, but I'm trying to make a point here.)

We might be tempted to write something like:

```ts
for (const person of people) {
  expect(typeof person.firstName).toBe('string');
  expect(typeof person.lastName).toBe('string');
  expect(person.isCool).toBe(true);
}
```

But, this is tedious. Instead, we could do something like this:

```ts
for (const person of people) {
  expect(person).toEqual({
    id: expect.stringMatching(/^cs-/),
    firstName: expect.any(String),
    lastName: expect.any(String),
    isCool: true,
  });
}
```

Alternatively, if we're _just_ looking for one property, we can do the following:

```ts
for (const person of people) {
  expect(person).toEqual(
    expect.objectContaining({
      isCool: expect.any(Boolean),
    }),
  );
}
```

# A More Practical Example

This is all well and good with small, easy-to-grok examples, but let's quickly glance at a [Real World Use Case for Asymmetric Matching](Real%20World%20Use%20Case%20for%20Asymmetric%20Matching.md).

# Bonus Exercise

If you're playing along at home and didn't do the previous bonus exercise, maybe now is the time? Can you make the tests in `examples/great-expectations/bonus-exercise.test.ts` pass?
