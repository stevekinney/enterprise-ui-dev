# Getting Set Up with Playwright

**Reminder**: If you use Visual Studio Code, then you'll probably want [the Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

Start by cloning down [this repository](https://github.com/stevekinney/integration-testing-playground).

```
https://github.com/stevekinney/integration-testing-playground
```

Do the normal installation dance with one additional step:

- `npm install`
- `npm run db:setup`

## Installing Playwright

You can initialize Playwright as follows:

```
npm init playwright@1.17.126
```

**Note**: Normally, you'd install the latest version (e.g. `npm init playwright@latest`), but I'm a little extra conservative because this is being recorded and watched later. I'm just looking out for future me.

Next, you'll answer some very important questions:

```
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

And with that, you should kick off an installation process.

## Running Your First Tests

Listen, I'm not one to "follow rules" or "take direction," but it looks like Playwright has some pretty strong opinions on what to do first. Let's go with the flow.

> Inside that directory, you can run several commands:
>
> `npx playwright test`
> Runs the end-to-end tests.
>
> `npx playwright test --project=chromium`
> Runs the tests only on Desktop Chrome.
>
> `npx playwright test example`
> Runs the tests in a specific file.
>
> `npx playwright test --debug`
> Runs the tests in debug mode.
>
> `npx playwright codegen`
> Auto generate tests with Codegen.
>
> We suggest that you begin by typing:
>
>     `npx playwright test`
>
> And check out the following files:
>
> - `./tests/example.spec.ts` - Example end-to-end test
> - `./tests-examples/demo-todo-app.spec.ts` - Demo Todo App end-to-end tests
> - `./playwright.config.ts` - Playwright Test configuration

Fine. Let's start with `npx playwright test`. It runs some tests and invite us to check out `npx playwright show-report`. Let's go for it. Super cool. Looks like some tests.

Let's peek into one of those actual test files and see what we have. I like this one because it helps me make a point and I really like making points.

```ts
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
```

Wow, that looks super familiar, right? So, already, you get the sense that everything we've talked about so far is going to pay off.

## Being Patient

Probably one of the biggest differences over our unit tests is that we need to `await` our expectations. This is because Playwright does't immediately give up. (Unlike our unit tests. `*cough*`). It will wait a few seconds to see if the element shows up the page. This keeps our tests from failing because of silly stuff "animations" and "waiting for stuff load over the network."

```ts
await expect(page.getByText('3 items left')).toBeVisible();
await expect(todoCount).toHaveText('3 items left');
await expect(todoCount).toContainText('3');
await expect(todoCount).toHaveText(/3/);
```

## Cleaning Up

That was all fun and great, but let's pause for a moment and clean up some of the leftover stuff that we had.

- Remove `tests-examples`
- Remove `tests/example.spec.ts` (and leave the `tests` folder.)

Or, like, don't. I don't really care.
