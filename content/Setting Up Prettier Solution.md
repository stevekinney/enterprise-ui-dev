# Setting Up Prettier (Solution)

Here is a quick action for setting up Prettier to check your code formatting before merging it into `main`.

```yml
check-formatting:
  runs-on: ubuntu-latest
  steps:
    - name: Checkout respository
      uses: actions/checkout@v3
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'npm'
    - run: npm ci
      name: Install modules from npm
    - name: Check formatting with Prettier
      run: npm run format:check
```

You're not wrong to think that there is some duplication here between the steps.
