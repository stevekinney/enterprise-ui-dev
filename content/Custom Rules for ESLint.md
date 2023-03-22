# Custom Rules for ESLint

First and foremost, make sure that you an existing rule doesn't already meet your needs. Here is [the official list](https://eslint.org/docs/latest/rules/). But are obviously a ton in Userland as well.

**An aside**: Checking out [AST Explorer](https://astexplorer.net/).

Here is a custom rule that bans (and fixes) the use of template literals in your code:

```ts
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

export function create(context) {
  return {
    TemplateLiteral(node) {
      context.report({
        node,
        message: 'Do not use template literals',

        fix(fixer) {
          if (node.expressions.length) {
            // Can't auto-fix template literal with expressions
            return;
          }

          return [
            fixer.replaceTextRange([node.start, node.start + 1], '"'),
            fixer.replaceTextRange([node.end - 1, node.end], '"'),
          ];
        },
      });
    },
  };
}
```

**Pro-Tip**: You can also use [selectors](https://eslint.org/docs/latest/extend/selectors#listening-for-selectors-in-rules) to more-easily find what you're looking for.

## Writing a Custom Rule

Let's say we want to ban the use of `fetch` and prefer an abstraction that like reports stuff to Segment or Sentry or whatever. We can start just with a rule:

```ts
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: false,
};

export function create(context) {
  return {
    Identifier(node) {
      context.report({
        message: 'Illegal use of the Fetch API. Prefer requestFromAPI.',
        node,
      });
    },
  };
}
```

Next, maybe we want to `fix` it.

The `fix` object has a few methods.

- `insertTextAfter(nodeOrToken, text)`: Inserts text after the given node or token.
- `insertTextAfterRange(range, text)`: Inserts text after the given range.
- `insertTextBefore(nodeOrToken, text)`: Inserts text before the given node or token.
- `insertTextBeforeRange(range, text)`: Inserts text before the given range.
- `remove(nodeOrToken)`: Removes the given node or token.
- `removeRange(range)`: Removes text in the given range.
- `replaceText(nodeOrToken, text)`: Replaces the text in the given node or token.
- `replaceTextRange(range, text)`: Replaces the text in the given range.

## Applying a Fix

You need to return an array of fixes.

```ts
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

export function create(context) {
  return {
    Identifier(node) {
      if (node.name === 'fetch') {
        context.report({
          message: 'Illegal use of the Fetch API. Prefer requestFromAPI.',
          node,
          fix(fixer) {
            return [fixer.replaceText(node, 'requestFromApi')];
          },
        });
      }
    },
  };
}
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

export function create(context) {
  return {
    Identifier(node) {
      if (node.name === 'fetch') {
        context.report({
          message: 'Illegal use of the Fetch API. Prefer requestFromAPI.',
          node,
          fix(fixer) {
            return [fixer.replaceText(node, 'requestFromApi')];
          },
        });
      }
    },
  };
}
```

## Exercise

Can you create a rule that takes something like this:

```ts
console.error(
  'Oh, no',
  'Also, did you know that console.log and its siblings take multiple arguments?',
);
```

And turns it into:

```ts
logError(
  'Oh, no',
  'Also, did you know that console.log and its siblings take multiple arguments?',
);
```

## Homework Assignment

There is a flaw here that is _not_ worth our time _right now_. Neither of these commands are globally available—so, we'd probably want to at least add an `import` statement to the top of the file. We can traverse up and down the AST. So, you _could_ add that—later.

[Create ESLint Rule (Solution)](Create%20ESLint%20Rule%20(Solution).md)
