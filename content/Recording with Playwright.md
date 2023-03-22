# Recording, Screenshots, and Snapshots
with Playwright

Typing stuff out is all well and good, but if we're looking to get some amount of coverage really quickly _and_ we're willing to remember that there is a lot of value in just making sure everything is where we expect, we can get use Playwright's recording feature to get a sanity check quickly.

![](../assets/Pasted%20image%2020230322042256.png)

## Screenshots

You can take a visual snapshot of a element or the entire page.

```ts
await expect(heading).toHaveScreenshot('heading.png');
await expect(heading).toHaveScreenshot('heading.png', { maxDiffPixels: 100 });
```

You can also just assert that an element has what you expect as it's text content.

```ts
const label = page.getByTestId('search-label');
await expect(await label.textContent()).toMatchSnapshot();
```