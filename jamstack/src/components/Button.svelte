<script lang="ts">
	export let to: any;
	export let text: string;
</script>

<div class="button-container">
	<a href={to} target="_blank" class="button">{text}</a>
</div>

<style lang="scss">
	.button-container {
		width: 320px;
		.button {
			border: 1px solid #333;
			display: block;
			width: 100%;
			padding: 24px;
			color: #333;
			text-align: center;
			font-size: 20px;
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			transition: 0.2s ease-in-out;
			transition-property: background, color;
			&:hover {
				background: #333;
				color: #fff;
			}
		}
	}
</style>
