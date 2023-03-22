Consider this action that I use [in my code](https://github.com/temporalio/ui/blob/9e063585055b561e40502759efe7182c3d4c2911/.github/actions/checkout-and-setup/action.yml)

It looks just like a workflow, but it's actually a reusable action.

```yml
name: 'Checkout, Install Node and Dependencies'
description: 'Install dependencies'

runs:
  using: 'composite'
  steps:
    - uses: actions/checkout@v3
      name: Checkout Repository 🫠
    - name: Setup Node 🏞️
      uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'npm'
    - run: npm ci
```

And then in your workflow:

```yml
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout and Setup Node
        uses: ./.github/actions/checkout-and-setup
      - run: npm test
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout and Setup Node
        uses: ./.github/actions/checkout-and-setup
      - run: npm run build
```

This feels like it should work, right? Why won't it? Why? Why?

**Hint**: What's the order of operations here?
