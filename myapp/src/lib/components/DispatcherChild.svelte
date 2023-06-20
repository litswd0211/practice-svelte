<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleCheck() {
    dispatch("myevent", { data: "Custom event triggered" });
  }
</script>

<button on:click={handleCheck}>Trigger Custom Event</button>
