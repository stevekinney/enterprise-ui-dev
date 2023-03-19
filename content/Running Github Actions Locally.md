# Running Github Actions Locally

If you want to run your Github actions locally, you can totally do that, but you're going to need Docker and [act](https://github.com/nektos/act).

The easiest way to get it is probably to use `brew`:

```
brew install act
```

And then you can trigger is using `act pull_request` or whatever other [event](Github%20Actions%20Events.md) you want to trigger.

Pulling down Docker images is _slow_ and as much as I have a tolerance for live-coding, I don't have the same tolerance for live Dockering. So, consider this part an independent study.
