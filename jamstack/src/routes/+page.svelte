<script lang="ts">
	// +page.server.js から流れてきたデータを定義
	export let data;
	let dataArray = data.articles.results;
</script>

<!-- ページタイトルを定義 -->
<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 class="heading">Svelte + gutendex Articles</h1>
<div class="card-container">
	<!-- 流れてきたデータのオブジェクトの中に配列であるarticlesが格納されているため、その配列を {#each}構文でループ -->
	{#each dataArray as book}
		<a href={`/post/${book.id}`} class="card-item">
			<h2 class="card-heading">{book.title}</h2>
			<p class="card-name">著者：{book.authors[0].name}</p>
		</a>
	{/each}
	{#if data.articles.length === 0}
		<p>表示出来る記事がありません。</p>
	{/if}
</div>

<style lang="scss">
	.heading {
		font-size: 24px;
		margin-bottom: 36px;
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 30px;

		.card-item {
			display: block;
			padding: 24px;
			border: 1px solid #333;
			text-decoration: none;
			color: #333;
			transition: 0.3s ease-out;
			transition-property: border, color, background;
			font-family: serif;

			&:hover {
				background: #eee;
				border: 1px solid #999;
			}

			.card-heading {
				font-size: 18px;
			}

			.card-name {
				font-size: 12px;
			}
		}
	}
</style>
