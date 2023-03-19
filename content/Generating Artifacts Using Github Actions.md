# Generating Artifacts Using Github Actions

Github Actions allow you to store an artifact that was create by any of your build processes just by using their `actions/upload-artifact@v3` action. For example, if we wanted to save the output of our build, we could do so using the following:

```yml
build:
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
    - run: npm run build
      name: Build the application
    - name: Archive build output
      uses: actions/upload-artifact@v3
      with:
        name: build-output
        path: dist
```

Now, we can push that up and see that it's ready and waiting for us when the action completes.

# Exercise

Can you add an job that generates the coverage report and makes it available as an artifact that we can download?
