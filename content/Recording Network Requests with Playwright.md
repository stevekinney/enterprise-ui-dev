# Recording Network Requests with Playwright

With Playwright, you can record network requests into a HAR file.

You can either do that from the CLI:

```
npx playwright open --save-har=network-requests.har --save-har-glob="**/api**" http://localhost:3000
```

Or, from Playwright itself.

```ts
const context = await browser.newContext({
  recordHar: {
    mode: 'minimal',
    path: './network-requests.har',
  },
  serviceWorkers: 'block',
});
```

## Replaying

```ts
await browserContext.routeFromHAR(har);
await browserContext.routeFromHAR(har, { update: true });
await browserContext.routeFromHAR(har, { update: true, url: '**/api**' });
```
