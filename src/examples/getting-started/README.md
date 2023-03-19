# 👩🏾‍🔬 Experiments

This totally isn't an excuse to make sure your set up works before we go any farther.

1. Run `npx vitest --run` and look at which test files run.
2. Run `npx vitest words --run` and look at which test files run.
3. Run `npx vitest related ./math.ts --run` and look at which test files run.
4. Run `npx vitest related ./exponent.ts --run` and look at which test files run.
5. Assuming you don't have any unstaged or uncommited changes, run `npx vitest --changed HEAD --run` and look at which test files—umm—_didn't_ run.
6. Make a change to `words.ts` (or any other file, really) and then run `npx vitest --changed HEAD --run` and see what tests run.
