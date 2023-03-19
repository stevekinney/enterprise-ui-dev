```yaml
name: Run Tests, Lint, and Check Types

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**.md'
      - 'LICENSE'
      - 'CODEOWNERS'

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

defaults:
  run:
    shell: bash

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Checkout and Setup Node
        uses: ./.github/actions/checkout-and-setup
      - name: Run Unit Tests
        run: pnpm test
```
