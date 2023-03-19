The easy way to do this is to use `page.route`.

```ts
await page.route('https://dog.ceo/api/breeds/list/all', async (route) => {
  const json = {
    message: { test_breed: [] },
  };
  await route.fulfill({ json });
});
```

This will set up Playwright to intercept any network requests that go to this route and replace it wiht the response that we provided.

# Recording and Replaying a HAR
