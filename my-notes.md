- don't run tests from top level
  - instead, go to e.g. src/examples/getting-started and then run `npm test`
- to avoid importing `{it, expect}` etc in every test file, in `vitest.config.ts` add:

```typescript
export default defineConfig({
//...
  test: {
//...
    globals: true
  }
/...
})
```
