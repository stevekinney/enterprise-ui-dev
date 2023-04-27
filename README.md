![](assets/enterprise-user-interface-development.png)

# Frontend Masters Course

This repository is a companion website to the [Frontend Masters](https://frontendmasters.com) course [Enterprise UI Development](https://frontendmasters.com/courses/enterprise-ui-dev).

# Introduction

What is this course all about? What do you need? What technologies are we going to be using? What do I need to have installed?

- [Introduction](content/Introduction.md)
- [Components of Large Application](content/Components%20of%20Large%20Application.md)

# Unit Testing

## Testing Philosophy

When it comes to testing, a lot of the terminology is murky and things don't always mean what they originally mean. Let's settle on a common vocabulary. We'll also talk about some of the trade-offs between different kinds of tests.

- [Unit, Integration, and End-to-End Testing](content/Unit,%20Integration,%20and%20End-to-End%20Testing.md)
- [Test Runners and Assertion Libraries](content/Test%20Runners%20and%20Assertion%20Libraries.md)

## Getting Warmed Up: The Basics of Unit Testing

Okay, we're not going to dwell _too much_ on the basics of unit testing, but let's at least do a quick review of the basics to get ourselves warmed up and make sure we're on the same page. If you're a little rusty, then this section will get you up to speed. That said, I suspect that even the seasoned unit testing wunderkind, I suspect you'll still pick up a trick or two.

- [Running Your Tests with Vitest](content/Running%20Your%20Tests%20with%20Vitest.md)
- [Why Tests Pass and Fail](content/Why%20Tests%20Pass%20and%20Fail.md)
- [Filtering Tests](content/Filtering%20Tests.md)
- [Test Suites and Annotations](content/Test%20Suites%20and%20Annotations.md)
- [Testing Asynchronous Code](content/Testing%20Asynchronous%20Code.md)

## Great Expectations

This course doesn't seek to be the canonical curriculum on testing. Instead, all of our discussions on testing are going to be from the perspective that your primary job is to write software and if your tests are brittle or hard to maintain, you're going to stop testing.

If the section that follows was a Buzzfeed blog post, it's title would be "Top Ten Tricks to Stop Hating Your Unit Tests."

- [Beyond Strict Equality](content/Beyond%20Strict%20Equality.md)
- [Asymmetric Matchers](content/Asymmetric%20Matchers.md) and a [Real World Use Case for Asymmetric Matching](content/Real%20World%20Use%20Case%20for%20Asymmetric%20Matching.md)
- **Exercise**: [Testing a Reducer Exercise](content/Testing%20a%20Reducer%20Exercise.md) and a [Solution](content/Testing%20a%20Reducer%20Solution.md)

## Parallelizing, Parameterizing, and Reporting

- [Test Context](content/Test%20Context.md)
- [Parameterizing Tests](content/Parameterizing%20Tests.md)
- [Parallelizing Tests](content/Parallelizing%20Tests.md)

# Building a CI Pipeline with Github Actions

We know that if a test doesn't fail then it technically passes. What about if you never run your tests? Join me for this and other deep philosophical questions. In this section, we'll begin building out some of our automated testing pipeline (a.k.a. continuous integration) using [Github Actions](https://www.google.com/search?client=safari&rls=en&q=github+actions&ie=UTF-8&oe=UTF-8).

- [Getting Started with Github Actions](content/Getting%20Started%20with%20Github%20Actions.md)
- [Adding a Step to Your Github Action](content/Adding%20a%20Step%20to%20Your%20Github%20Action.md)
- [Caching Assets Between Jobs](content/Caching%20Assets%20Between%20Jobs.md)
- [Caching Dependencies](content/Caching%20Dependencies.md)
- [Setting Up Branch Protections](content/Setting%20Up%20Branch%20Protections.md)
- Exercise: [Setting Up Prettier with Github Actions](content/Setting%20Up%20Prettier%20with%20Github%20Actions.md) and a [Solution](content/Setting%20Up%20Prettier%20Solution.md)
- Bonus: [Running Github Actions Locally](content/Running%20Github%20Actions%20Locally.md)

# Component Testing

Testing functions is all well and good, but what about mounting entire components? This can be a great way to get some confidence in your UI implementation without needing to figure out how to get a full browser-driven integration suite up and running. In this section, we'll get starting with [Testing Library](https://testing-library.com), which is a _mostly_ framework-agnostic tool for rendering UI to a fake DOM and giving you the ability to interact with it just like a real user would.

- [Testing the Accident Counter](content/Testing%20the%20Accident%20Counter.md)
- [Extending Matchers for Testing Library](content/Extending%20Matchers%20for%20Testing%20Library.md)
- [Globally Extending Matchers in the Test Setup for Component Testing](content/Globally%20Extending%20Matchers%20in%20the%20Test%20Setup%20for%20Component%20Testing.md)
- [Setting the Environment in Vitest](content/Setting%20the%20Environment%20in%20Vitest.md)
- [Interacting with the DOM Using Testing Library](content/Interacting%20with%20the%20DOM%20Using%20Testing%20Library.md)
- [Basic Component Testing Exercise](content/Basic%20Component%20Testing%20Exercise.md) and [Solution](content/Basic%20Component%20Testing%20Solution.md)
- [Creating a Helper for Rendering Components and User Events](content/Creating%20a%20Helper%20for%20Rendering%20Components%20and%20User%20Events.md)
- Exercise: [Packing List Component Testing](content/Packing%20List%20Component%20Testing%20Exercise.md) and [Solution](content/Component%20Testing%20Solution.md)
- Bonus Exercise: [Obstacle Course](content/Obstacle%20Course.md)
- [Working with Contexts and Redux](content/Working%20with%20Contexts%20and%20Redux.md) and [Exercise](content/Working%20with%20Contexts%20and%20Redux.md#Exercise)

## Testing for Accessibility

- [Hooking Up aXe with Testing Library](content/Hooking%20Up%20aXe%20with%20Testing%20Library.md)

## Testing for Code Coverage

- [Code Coverage](content/Code%20Coverage.md)

# Storing Artifacts Using Github Actions

- [Generating Artifacts Using Github Actions](content/Generating%20Artifacts%20Using%20Github%20Actions.md)
- Exercise: [Generating an Artifact for Your Code Coverage Report](content/Generating%20Artifacts%20Using%20Github%20Actions.md#Exercise) and a [Solution](content/Generating%20an%20Artifact%20for%20Your%20Code%20Coverage%20Report.md)

# Mocking and Spying

- [Mocks](content/Mocks.md)
- [Spies](content/Spies.md)
- [Faking Time](content/Faking%20Time.md)
- [Clearing, Restoring, and Reseting Mocks and Spies](content/Clearing,%20Restoring,%20and%20Reseting%20Mocks%20and%20Spies.md)
- [Mocking Imports and Modules](content/Mocking%20Imports%20and%20Modules.md)
- A Word on [Dependency Injection](content/Dependency%20Injection.md)
- [Mocking Globals](content/Mocking%20Globals.md)
- [Mocking Environment Variables](content/Mocking%20Environment%20Variables.md)
- [Mocking APIs](content/Mocking%20APIs.md)

# Integration Testing with Playwright

- [Getting Set Up with Playwright](content/Getting%20Set%20Up%20with%20Playwright.md)
- [Writing Some Simple Playwright Tests](content/Writing%20Some%20Simple%20Playwright%20Tests.md)
- Exercise: [Input Obstacles](content/Input%20Obstacles.md)
- [Configuring Playwright](content/Configuring%20Playwright.md)
- [Recording with Playwright](content/Recording%20with%20Playwright.md)
- Exercise: Store an Artifact for Your Playwright Tests
- Experiment: Get computed style for a DOM node
- [Mocking Routes in Playwright](https://playwright.dev/docs/mock)
- [Recording Network Requests with Playwright](content/Recording%20Network%20Requests%20with%20Playwright.md)

# Enforcing Standards

- [Configuring Prettier](content/Prettier.md)
- [Configuring and Running ESLint](content/Configuring%20and%20Running%20ESLint.md)
- [Custom Rules for ESLint](content/Custom%20Rules%20for%20ESLint.md)
- Exercise: Set Up a Job for Checking Lint and Prettier Rules
- [Husky, Lint-Staged, and Git Hooks](content/Husky,%20Lint-Staged,%20and%20Git%20Hooks.md)
- [Creating a Reusable Github Action](content/Creating%20a%20Reusable%20Github%20Action.md)
