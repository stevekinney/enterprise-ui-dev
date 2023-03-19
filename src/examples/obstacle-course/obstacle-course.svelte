<script>
  const avengers = [
    'Iron Man',
    'Black Widow',
    'Thor',
    'Hulk',
    'Captain America',
    'Hawkeye',
  ];
  const toppingChoices = ['Lettuce', 'Tomato', 'Onion', 'Sardines'];
  const beatles = ['John', 'Paul', 'George', 'Ringo'];

  let text = '';
  let favoriteAvenger = 'Black Widow';
  let toppings = [];
  let favoriteBeatle = 'Paul';
  let color = '#FF0000';
  let date = '2021-12-17';
  let rating = '4';
  let file = '';
</script>

<svelte:head>
  <title>Input Obstacle Course</title>
</svelte:head>

<main class="grid grid-cols-2 gap-4">
  <div class="p-2 border-2 border-purple-300">
    <label for="deep-thought">Deep Thought</label>
    <input
      placeholder="Some text…"
      id="deep-thought"
      bind:value={text}
      data-test="text-input"
    />
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="text-result">{text}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <label for="avenger">Favorite Avenger</label>
    <select bind:value={favoriteAvenger} id="avenger" data-test="select-input">
      {#each avengers as avenger}
        <option>{avenger}</option>
      {/each}
    </select>
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="select-result">{favoriteAvenger || 'No one'}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <h3>Toppings</h3>
    {#each toppingChoices as topping}
      <label class="mb-0" for={topping.toLocaleLowerCase()}>
        <input
          type="checkbox"
          id={topping.toLocaleLowerCase()}
          bind:group={toppings}
          name="toppings"
          value={topping}
          data-test="checkbox-{topping.toLocaleLowerCase()}"
        />
        {topping}
      </label>
    {/each}
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="checkbox-result">{toppings.join(', ') || '(None)'}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <h3>Favorite Beatle</h3>
    {#each beatles as beatle}
      <label class="list" for={beatle.toLowerCase()}>
        <input
          type="radio"
          name="beatles"
          id={beatle.toLowerCase()}
          value={beatle}
          bind:group={favoriteBeatle}
          data-test="radio-{beatle.toLowerCase()}"
        />
        {beatle}
      </label>
    {/each}
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="radio-result">{favoriteBeatle}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <label for="color">Favorite Color</label><input
      type="color"
      class="h-10 w-20"
      id="color"
      bind:value={color}
      data-test="color-input"
    />
  </div>
  <div
    class="p-2 border-2 border-purple-300 flex items-center justify-around"
    style="color: {color}"
    data-test="color-container"
  >
    <p data-test="color-result">{color}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <label for="date">Date</label><input
      type="date"
      name="date"
      id="date"
      bind:value={date}
      data-test="date-input"
    />
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="date-result">{date}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <label for="rating">Rating</label><input
      type="range"
      name="rating"
      id="rating"
      min="0"
      max="10"
      bind:value={rating}
      data-test="range-input"
    />
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="range-result">{rating}</p>
  </div>
  <div class="p-2 border-2 border-purple-300">
    <label for="resume">Résumé</label><input
      type="file"
      name="resume"
      id="resume"
      bind:value={file}
      data-test="file-input"
    />
  </div>
  <div class="p-2 border-2 border-purple-300 flex items-center justify-around">
    <p data-test="file-result">{file || ''}</p>
  </div>
</main>
