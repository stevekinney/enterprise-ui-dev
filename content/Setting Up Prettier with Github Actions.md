# Setting Up Prettier

Do we _need_ to set up Prettier _now_? **No**. Do I want an excuse to have you write your own Github Action? **Yes**. So, here we are.

```
npm install -D prettier
```

You can configure it however you want. You don't even have to configure it, frankly. As of right now, this is what my `.prettierrc` file looks like:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": false
}
```

Let's also make our lives easier and add some commands to `package.json`:

```json
{
  //…
  "scripts": {
    //…
    "format:check": "prettier . --check --ignore-path .gitignore",
    "format:fix": "prettier . --check --ignore-path .gitignore"
  }
  //…
}
```

# Exercise

Can you add a job that checks the formatting of PRs against `main`?

You can see a solution [Setting Up Prettier Solution](Setting%20Up%20Prettier%20Solution.md).
