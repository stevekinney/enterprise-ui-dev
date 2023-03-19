<script lang="ts">
  export let count = 0;
</script>

<section class="flex flex-col gap-8 rounded-lg border-4 border-primary-50 p-8">
  <header>
    <h1>Days Since Our Last Gitastrophe™</h1>
  </header>
  <div class="text-center text-8xl" data-testid="current-count">
    {String(count)}
  </div>
  <div class="flex justify-center gap-4">
    <button class="btn-danger" name="reset" on:click={() => (count = 0)}>
      Reset
    </button>
    <button class="btn-primary" name="increment" on:click={() => count++}>
      Increment
    </button>
  </div>
</section>
