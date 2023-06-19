<script>
  export let text;
  export let html;
  export let arr;
  export let obj;
</script>

<p class="text">{text}</p>

<p class="html">{@html html}</p>

<ul class="array-list">
  {#each arr as ar, i}
    <li>
      <a href={ar.link}>
        {i + 1} <span>{ar.text}</span>
      </a>
    </li>
  {/each}
</ul>

<div class="object-card">
  {#if obj.imgpath}
    <img src={obj.imgpath} alt={obj.text} />
  {/if}
  <p class="text">{obj.text}</p>
</div>
