<script>
  import Child from "$lib/components/Child.svelte";
  import DispatcherChild from "$lib/components/DispatcherChild.svelte";
  import { bind } from "svelte/internal";

  let text = "text,txt";
  let html = "1<br>2<br>3";
  let arr = [
    { link: "#1", text: "text01" },
    { link: "#2", text: "text02" },
    { link: "#3", text: "text03" },
  ];
  let obj = {
    imgpath: "https://picsum.photos/200/300",
    text: "text",
  };

  function alertToggle() {
    alert(`click Svelte Event`);
  }

  function consoleTogge() {
    console.log(`once click Svengte Event`);
  }

  function handleCustomEvent(event) {
    console.log(event.detail.data);
  }

  let name = "";

  let selectedFruit = "";
  let selectedFruits = [];
  let fruits = ["apple", "orange", "banana"];

  let myElement;

  import { derCount, derDoubled } from "../store.js";
</script>

<Child {text} {html} {arr} {obj} />

<button on:click={alertToggle} on:click|once={consoleTogge}>multi toggle</button
>
<button on:click|once={alertToggle} on:click={consoleTogge}>once toggle</button>

<DispatcherChild on:myevent={handleCustomEvent} />

<input type="text" bind:value={name} />
<p>Hello, {name}!</p>

<select bind:value={selectedFruit}>
  {#each fruits as fruit}
    <option>{fruit}</option>
  {/each}
</select>

<p>You selected: {selectedFruit || "nothing"}</p>

{#each fruits as fruit}
  <label>
    <input type="checkbox" bind:group={selectedFruits} value={fruit} />
    {fruit}
  </label>
{/each}

<p>Selected fruits: {selectedFruits.join(", ") || "none"}</p>

<div bind:this={myElement}>Hello, Svelte!</div>

<button on:click={() => console.log(myElement)}>Log Dom element</button>

<p>Count: {$derCount}</p>
<p>Double Count: {$derDoubled}</p>
