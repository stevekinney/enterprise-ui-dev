These terms tend to be overloaded and have a lot of wiggle room, but let's at least draw some lines in the sand.

- **Unit tests**: An isolated test that tests one thing. Typically, this is a set of tests that might pass particular arguments to a function and then make sure that the value that is return is what we were expecting.
- **Integration tests**: This is where it goes a little squishy. These are tests that test one or more units working together. Sure, any test that exercises two or more units is technically an integration test. But, for our purposes, we're going to say that browser tests (e.g. [Cypress](https://www.cypress.io), [Playwright](https://playwright.dev), [Selenium](https://www.selenium.dev), [WebdriverIO](https://webdriver.io)) are integration tests.
- **End-to-End tests**: These test the _whole system_. In a perfect world, these are testing everything from the authentication flow to the APIs to the UI. Obviously, these are super valuable, but getting this infrastructure in place can be difficult to the point of seemingly impossible without a large investment of effort.

The moral of the story here is that all of your tests live on a spectrum: unit tests are easy to write and running hundreds or even thousands is pretty quick. A passing integration or end-to-end test provides a lot more confidence, but they're also a lot harder to write and take longer to run.

The trick here is finding the right balance. It's all about confidence. We're not looking to test for testing's sake. What we _want_ is to be able to change or refactor our code with confidence that we're not accidentally breaking something important. Whatever kinds of tests get you there the fastest are the ones that you should write.

Sure, integration tests are slower and somewhat harder to write, but sometimes a single integration test can provide a level of confidence that rivals 60 unit tests.
