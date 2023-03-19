That's not terrible, but it could be better. We can install `@testing-library/jest-dom`, which will add in some additional matchers for us to take advantage of.

```
npm install -D @testing-library/jest-dom
```

## Additional Matchers

`@testing-libary/jest-dom` will add the following matchers to `expect`:

- [`toBeDisabled`](https://github.com/testing-library/jest-dom#tobedisabled)
- [`toBeEnabled`](https://github.com/testing-library/jest-dom#tobeenabled)
- [`toBeEmptyDOMElement`](https://github.com/testing-library/jest-dom#tobeemptydomelement)
- [`toBeInTheDocument`](https://github.com/testing-library/jest-dom#tobeinthedocument)
- [`toBeInvalid`](https://github.com/testing-library/jest-dom#tobeinvalid)
- [`toBeRequired`](https://github.com/testing-library/jest-dom#toberequired)
- [`toBeValid`](https://github.com/testing-library/jest-dom#tobevalid)
- [`toBeVisible`](https://github.com/testing-library/jest-dom#tobevisible)
- [`toContainElement`](https://github.com/testing-library/jest-dom#tocontainelement)
- [`toContainHTML`](https://github.com/testing-library/jest-dom#tocontainhtml)
- [`toHaveAccessibleDescription`](https://github.com/testing-library/jest-dom#tohaveaccessibledescription)
- [`toHaveAccessibleName`](https://github.com/testing-library/jest-dom#tohaveaccessiblename)
- [`toHaveAttribute`](https://github.com/testing-library/jest-dom#tohaveattribute)
- [`toHaveClass`](https://github.com/testing-library/jest-dom#tohaveclass)
- [`toHaveFocus`](https://github.com/testing-library/jest-dom#tohavefocus)
- [`toHaveFormValues`](https://github.com/testing-library/jest-dom#tohaveformvalues)
- [`toHaveStyle`](https://github.com/testing-library/jest-dom#tohavestyle)
- [`toHaveTextContent`](https://github.com/testing-library/jest-dom#tohavetextcontent)
- [`toHaveValue`](https://github.com/testing-library/jest-dom#tohavevalue)
- [`toHaveDisplayValue`](https://github.com/testing-library/jest-dom#tohavedisplayvalue)
- [`toBeChecked`](https://github.com/testing-library/jest-dom#tobechecked)
- [`toBePartiallyChecked`](https://github.com/testing-library/jest-dom#tobepartiallychecked)
- [`toHaveErrorMessage`](https://github.com/testing-library/jest-dom#tohaveerrormessage)

Let's start simple by extending our matchers in _this_ test file.

```ts
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
```

Alternatively, if you're using the globally-available version of `expect`, you can just import the library and it will automatically extend `expect`.

```ts
import '@testing-library/jest-dom';
```

We can now update our test accordingly:

```ts
test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('1');
});
```

Now, we'll get a significantly better error message. And we don't have to worry about the DOM API as much. Our new matcher will check the

```ts
Error: expect(element).toHaveTextContent()

Expected element to have text content:
  1
Received:
  0
```

## Making the Test Pass Again

Okay, that was all well and good, but let's get the test passing again.

```ts
test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});
```

Additionally, `.toHaveTextContent` will also accept a regular expression to make your texts more flexible.

Let's talk about [how to set this up for our entire suite](Globally%20Extending%20Matchers%20in%20the%20Test%20Setup%20for%20Component%20Testing.md).
