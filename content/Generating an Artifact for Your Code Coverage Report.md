```yml
test:
  runs-on: ubuntu-latest
  steps:
    - name: Checkout respository
      uses: actions/checkout@v3
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'npm'
    - name: Install modules from npm
      run: npm ci
    - name: Run coverage report
      run: npm run coverage
    - name: Generate coverage report
      uses: actions/upload-artifact@v3
      with:
        name: coverage-report
        path: coverage
```
