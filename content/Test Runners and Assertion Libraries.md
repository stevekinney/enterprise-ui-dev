# Anatomy of a Testing Framework

You _could_ separate testing libraries into two classes:

- **An assertion library**: A library that makes sure that your code does what it expects (or throws an error if it doesn't). Some examples include [Chai](https://www.chaijs.com), [Should.js](https://shouldjs.github.io), [Node's built-in `assert` module](https://nodejs.org/api/assert.html).
- **A test runner**: A process that runs through all of your tests and generates reports. [Mocha](https://mochajs.org) is an example of this. A very basic test running might grep for all of the files that end in `*.test.js` and execute them using Node.

Some modern testing frameworks (namely: [Jasmine](https://jasmine.github.io), [Jest](https://jestjs.io), and [Vitest](https://vitest.dev)) combine a test runner with an assertion library. So, this distinction probably isn't terribly important these days, but I think it's worth calling out. If there was an assertion library that you like _more_ than whatever comes built-in with Jest, you _could_ swap it out with another assertion library and everything should work as expected.

I'm not going to waste your time and make you eat your vegetables and build one from scratch just to prove a point.

## Which Testing Framework Should I Use?

Honestly, it doesn't really matter. Jest is built on top of Jasmine and [Vitest is a drop-in replacement for Jest](https://vitest.dev/guide/comparisons.html) (mostly). We're going to use Vitest during our time together, but everything we do should apply to Jest as well. If and when it doesn't, I'll make it a point to call it out.

But, if you really wanted to know my heuristic, here it is:

- Jest is maintained by Facebook, who coincidentally maintain [React](https://reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). And, it comes built-in with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app). So, I'll usually just use Jest if it's already there because I am _very_ lazy.
- [Vitest](https://vitest.dev) is optimized to work with Vite (an alternative to Webpack). By default, Vue and Svelte applications use Vite. React applications can use Vite as well and there is even a boilerplate (e.g. `npm create vite@latest my-app --template react`, which works suspiciously similar to `create-react-app`. I chose it for this course it's the most broadly applicable.
- [Angular](https://angular.io/guide/testing) uses Jasmine by default. But, like I said, Jest is based on Jasmine and Vitest is a drop-in replacement for Jest.

## Adding Vitest to Visual Studio Code

If you use Vitest and Visual Studio Code, there is [a helpful plugin for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) that makes it easy to run your tests from inside your editor. There is also a [Visual Studio Code Plugin for Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).

## Further Investigation

- [Helpful Resources and Tools](Helpful%20Resources%20and%20Tools.md)
