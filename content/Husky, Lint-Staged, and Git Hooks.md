# Husky, Lint-Staged, and Git Hooks

**Important-ish**: Make sure to add this "prepare" script to your `package.json`.

```
npm install -D husky lint-stage commitlint
```

Here is what a Husky file might end up looking like:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

Here is an example of my `lint-staged` set up:

```json
{
  "*.{ts,js}": ["pnpm lint:fix", "prettier --write"],
  "*.{css,postcss,svelte}": "stylelint --fix",
  "*.{json,md}": "prettier --write"
}
```

```
npx husky add .husky/precommit
```

## Commitlint

We can install and set up Commitlint:

```
# Install and configure if needed
npm install --save-dev @commitlint/{cli,config-conventional}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

And then we can add the hook to husky.

```
npx husky add .husky/commit-msg  'npx commitlint --edit ${1}'
```

Now, we can test the usage:

```
npx commitlint --from HEAD~1 --to HEAD --verbose
```

We can also take `@commitlint/prompt-cli`.

Here is a script for validating that you have a Jira ticket (or whatever) number in your commit:

```
  commitlint: {
    'rules': {
      'references-empty': [2, 'never'],
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['PROJ-']
      }
    },
  }
```

## In a Github Action

You _could_ just use this on the PR title since that ends up being the commit if you use squash and commit.

```
${{ github.event.pull_request.title }}
```
