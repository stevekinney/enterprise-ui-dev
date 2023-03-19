We can use test.each and describe.each to programmatically generate tests and test suites for us. Consider the following example:

```ts
export class Polygon {
  sides: number;
  length: number;

  constructor(sides: number, length: number) {
    if (sides < 3) throw new Error('Polygons must have three or more sides.');
    this.sides = sides;
    this.length = length;
  }

  get type(): PolygonType | undefined {
    if (this.sides === 3) return 'triangle';
    if (this.sides === 4) return 'quadrilateral';
    if (this.sides === 5) return 'pentagon';
    if (this.sides === 6) return 'hexagon';
    if (this.sides === 7) return 'heptagon';
    if (this.sides === 8) return 'octagon';
    if (this.sides === 9) return 'nonagon';
    if (this.sides === 10) return 'decagon';
  }

  // …
}
```

Maybe we want to test that we're getting the correct name depending on the number of sides. It's _not_ that hard to write a bunch of tests for this, but you can put on your imagination hats for a moment and imagine a world where you have a lot more cases.

`describe.each` and `it.each` (or, `test.each`) allow us to use an array or table to automatically generate tests for ourselves.

For examples, we can use an array of arrays:

```ts
  it.each([
    [3, 'triangle'],
    [4, 'quadrilateral'],
    [5, 'pentagon'],
    [6, 'hexagon'],
    [7, 'heptagon'],
    [8, 'octagon'],
    [9, 'nonagon'],
    [10, 'decagon'],
  ])('a polygon with %i sides should be considered a %s', (sides, type) => {
    const polygon = new Polygon(sides, 10);
    expect(polygon.type).toBe(type);
  });
});
```

This will generate a number of tests on our behalf. You'll notice that the first element of the array is the first argument being passed to the test function, the second element is the second argument, and so on.

You'll also notice that we can use formatted strings to generate test names.

# Using an Array of Objects

Alternatively, you can use an array of objects to generate your tests.

```ts
it.each([
  { sides: 3, type: 'triangle' },
  { sides: 4, type: 'quadrilateral' },
  { sides: 5, type: 'pentagon' },
  { sides: 6, type: 'hexagon' },
  { sides: 7, type: 'heptagon' },
  { sides: 8, type: 'octagon' },
  { sides: 9, type: 'nonagon' },
  { sides: 10, type: 'decagon' },
])(
  'a polygon with $sides sides should be considered a $type',
  ({ sides, type }) => {
    const polygon = new Polygon(sides, 10);
    expect(polygon.type).toBe(type);
  },
);
```

In this example you'll notice that I'm destructuring an object to get the values int he function and I can use `$property` in the string that defines the test name,

# Using a Table

There is one other way to generate tests and that's by using a Markdown table.

We might have something like this:

```
polygonType        | sides | sumOfAngles | perimeter | area
${'triangle'}      | ${3}  | ${180}      | ${30}     | ${43.3012701892219}
${'quadrilateral'} | ${4}  | ${360}      | ${40}     | ${100}
${'pentagon'}      | ${5}  | ${540}      | ${50}     | ${172.047740058897}
${'hexagon'}       | ${6}  | ${720}      | ${60}     | ${259.807621135332}
${'heptagon'}      | ${7}  | ${900}      | ${70}     | ${363.391244400159}
${'octagon'}       | ${8}  | ${1080}     | ${80}     | ${482.842712474619}
${'nonagon'}       | ${9}  | ${1260}     | ${90}     | ${618.18241937729}
${'decagon'}       | ${10} | ${1440}     | ${100}    | ${769.420884293813}
```

We can generate a series of tests by passing this in as a template literal to the function:

```ts
describe.each`
  polygonType        | sides | sumOfAngles | perimeter | area
  ${'triangle'}      | ${3}  | ${180}      | ${30}     | ${43.3012701892219}
  ${'quadrilateral'} | ${4}  | ${360}      | ${40}     | ${100}
  ${'pentagon'}      | ${5}  | ${540}      | ${50}     | ${172.047740058897}
  ${'hexagon'}       | ${6}  | ${720}      | ${60}     | ${259.807621135332}
  ${'heptagon'}      | ${7}  | ${900}      | ${70}     | ${363.391244400159}
  ${'octagon'}       | ${8}  | ${1080}     | ${80}     | ${482.842712474619}
  ${'nonagon'}       | ${9}  | ${1260}     | ${90}     | ${618.18241937729}
  ${'decagon'}       | ${10} | ${1440}     | ${100}    | ${769.420884293813}
`(
  '$polygonType',
  ({ polygonType, sides, lengthOfSide, sumOfAngles, perimeter, area }) => {
    //…
  },
);
```

# Exercise

Take a look at `src/examples/parameterizing-tests/polygon.test.ts`. Can you generate tests based on the data?

# A Secret

**Nota bene**: This is part of a series of tips and tricks that are definitely bad ideas. That said, they're surprising effective and sometimes you have to break the rules, right?

I know. I have TypeScript to verify that a function will only get the arguments that I say it will. But, TypeScript can only analyze your code base. If a piece of my code has any interaction with the outside world, I might choose to add some guards in order to make sure it doesn't blow up. I'll use test parameters to make this easy for myself.

