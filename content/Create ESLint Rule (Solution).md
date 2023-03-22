```ts
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

export function create(context) {
  return {
    MemberExpression: (node) => {
      if (node.object.name === 'console' && node.property.name === 'error') {
        context.report({
          message: 'Illegal use of the console.error. LogError.',
          node,
          fix(fixer) {
            return [fixer.replaceText(node, 'logError')];
          },
        });
      }
    },
  };
}
```
