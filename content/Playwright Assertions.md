Playwright has a lot of the common assertion methods that we saw in Vitest. But it also has a few additional ones that are specific to Playwright.

- [`expect(locator).toBeChecked()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-checked): The checkbox is—umm—checked.
- [`expect(locator).toBeDisabled()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-disabled): The element is disabled.
- [`expect(locator).toBeEditable()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-editable): The element is editable.
- [`expect(locator).toBeEmpty()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-empty): The element is empty—as in, it has no children.
- [`expect(locator).toBeEnabled()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-enabled): The element is enabled (a.k.a. _not_ disabled).
- [`expect(locator).toBeFocused()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-focused): The element is focused.
- [`expect(locator).toBeHidden()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-hidden): The element is not visible. It's hidden.
- [`expect(locator).toBeInViewport()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport): Is the element actually in the screen right now or is it something you'd have to scroll to get to.
- [`expect(locator).toBeVisible()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible): Element is visible. You know, it's not hidden or using `display: none;` or some other shenanigans.
- [`expect(locator).toContainText()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-contain-text): The element contains some test that you generously provided.
- [`expect(locator).toHaveAttribute()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-attribute): The element has a particularly DOM attribute.
- [`expect(locator).toHaveClass()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-class): The element has a specific CSS class.
- [`expect(locator).toHaveCount()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-count): The number has exactly _this_ many children.
- [`expect(locator).toHaveCSS()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-css): Specific CSS property.
- [`expect(locator).toHaveId()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-id): The element has a particular ID.
- [`expect(locator).toHaveJSProperty()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-js-property): The element has a JavaScript property.
- [`expect(locator).toHaveScreenshot()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1): We have a screenshot of this element.
- [`expect(locator).toHaveText()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-text): The element has exactly this text.
- [`expect(locator).toHaveValue()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-value): There is some value in this particularly input field.
- [`expect(locator).toHaveValues()`](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-values): This is used with a `<select />` or other element that allows for multiple selections.

There are also a few things that we get from the page itself.

- [`expect(page).toHaveScreenshot()`](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1): The page has a screenshot.
- [`expect(page).toHaveTitle()`](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-title): The page has a particular title
- [`expect(page).toHaveURL()`](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-url): The page is located at a given URL.

We can also check in our our API responses and make sure that they are okay.

- [`expect(apiResponse).toBeOK()`](https://playwright.dev/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok): Response has an OK status

# Soft Assertions

Soft assertions will make a note that something didn't go as planned, but won't fail the test.
