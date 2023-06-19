<script>
  import Child from "$lib/components/Child.svelte";

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
</script>

<Child {text} {html} {arr} {obj} />

<button on:click={alertToggle} on:click|once={consoleTogge}>multi toggle</button
>
<button on:click|once={alertToggle} on:click={consoleTogge}>once toggle</button>
