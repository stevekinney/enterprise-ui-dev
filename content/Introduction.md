# Introduction

## What is This All About?

Getting started is easy. But, over time, our code bases tend to grow unwieldy. Things that _should_ be easy all of a sudden _aren't_ anymore because we're not sure what will break if we make what would otherwise be a relatively simple change. In this course, we're going to look at strategies getting that complexity under control.

This can happen for a number of reasons:

- Maybe you've inherited an older codebase,
- one that's been through some changes in product direction,
- one that you're looking to migrate from an older framework,
- or a brand new one that you'd like to get started on the right foot…

This course will show you how to put together an infrastructure that will give you confidence when making changes—big or small.

## Oh Wait — Who Even Am I?

Alright, let's get this part out of the way:

Hi! I'm [Steve](https://stevekinney.net) and I am the Head of Engineering, Frontend and Developer Tools, at [Temporal](https://temporal.io). Previously, I was the frontend architect at [Twilio](https://twillio.com) and [SendGrid](https://sendgrid.com) (and Temporal, actually).

### Three Ingredients

When I think about managing a large code base, I tend to think about it from three different perspectives:

- Patterns (architecture)
- Processes (the ways that we work as a team)
- Systems (testing, build systems, CI/CD)

In the name of practicality, we're going to use that third item—Systems—as a vehicle for understanding the first two, since I'm going to work under the assumption that you might already be working on a large codebase that is starting to buckle under the weight of its own complexity. The first step is to get your application into a place where you can start making some large-scale changes—even if that's just updating to the latest version of whatever framework that you use.

## What Are We Going to Cover?

As I alluded above, I'd be lying if I didn't admit that a big part of this course focuses on testing and build processes. Yes, that's because they're foundational. Sure. But, more importantly: Unless you're confident you can make changes without breaking things, then everything else is just a fun conversation that you'll never be able to put into practice.

- The fundamentals and philosophy of testing your application.
- A hand-wavy discussion of the various forms of testing.
- Writing some tests to make sure your application doesn't break.
- How to fake stuff in your tests (e.g. mocks, stubs, spies, test doubles, etc.).
- How to structure your application in a way that makes easy to test and update.
- How to enforce coding standards and best practices using the build process.
- How to build CI/CD processes using Github Actions.

## What Technologies Are We Going to Use?

![](../assets/technologies.png)

In a perfect world, I could make this course completely agnostic of any particular library or framework? That said, _not_ using a framework is a choice in-and-of itself. My goal is to make this content as framework-agnostic as possible, while also pulling in the lowest common denominator tools in order to make sure we're staying within the bounds of practicality.

- **TypeScript**: I shudder at the prospect of maintaining a large code base _without_ TypeScript. Having a lightning-fast compiler run through your code to make sure you're not making any obvious mistakes eliminates entire classes of tests. In this workshop, we're going to make believe that JavaScript doesn't exist. That said, I don't think you need to be particularly knowledgeable in TypeScript. We're not doing anything particularly advanced and I'll explain any interesting bits as we go along.
- **Vitest**: Vitest is mostly API-compliant with Jest. So, barring some minor configuration differences. Most of the unit and component tests we write will work in Jest as well. I chose Vitest because it works as well with React as it does with other frameworks like Vue and Svelte.
- **React**: You might love it or hate it, but you probably have at least a working knowledge of it at this point. When we start testing components or slightly-larger examples. I'll use React. That said, for some of the examples, I also did them in Svelte just to make a point that most of what we're talking about here applies regardless of what framework you're using. That said, I'll dip my toes into _some_ React-specific techniques because I've seen the same [npm trends chart](https://npmtrends.com/angular-vs-react-vs-svelte-vs-vue) as the rest of you.
