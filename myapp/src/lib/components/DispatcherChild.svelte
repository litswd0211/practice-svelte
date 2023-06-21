<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { onMount, beforeUpdate, afterUpdate, tick } from "svelte";
  let count = 0;

  async function handleCheck() {
    // dispatch("myevent", { data: "Custom event triggered" });
    count++;
    await tick();
    console.log(`count: ${count}`);
  }

  onMount(() => {
    console.log("Component mounted");
  });

  beforeUpdate(() => {
    console.log("Component will update");
  });

  afterUpdate(() => {
    console.log("Component updated");
  });
</script>

<button on:click={handleCheck}>Trigger Custom Event</button>
