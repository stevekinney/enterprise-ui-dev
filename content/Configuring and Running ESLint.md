You've probably at least heard of [ESLint](https://eslint.org) before, but just in case you haven't. ESLint is tool for performing static analysis on your code and finding places where you're code might have some unexpected edge-cases. On it's best days, it can be a powerful tool to help you enforce best practices in your codebase. On it's worst days, it can annoy your co-workers with pendantic formatting issues and other stylistic nitpicks.

To install `eslint`:

```
npm install -D eslint
```

Next, you'll need to initialize a configuration file.

```
npm init @eslint/config
```

This will ask you a few questions:

```
? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

I'll let you answer those questions as you see fit. It's your enterprise application—you do what you want.

# Setting Up a Rule

Let's take look at [this rule](https://eslint.org/docs/latest/rules/no-console).

# Further Reading

- [Command Line Interface Reference - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/command-line-interface)
- [How To Enable Linting on Save with Visual Studio Code and ESLint | DigitalOcean](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting)
- [Auto-fix and format your JavaScript with ESLint - IBM Developer](https://developer.ibm.com/articles/auto-fix-and-format-your-javascript-with-eslint/)
- [javascript - Is it safe to apply autofix from ESLint? - Stack Overflow](https://stackoverflow.com/questions/50289536/is-it-safe-to-apply-autofix-from-eslint)
- [How to Set Up ESLint Autofix and Prettier on Save in WebStorm | The WebStorm Blog (jetbrains.com)](https://blog.jetbrains.com/webstorm/2016/08/using-external-tools/)
