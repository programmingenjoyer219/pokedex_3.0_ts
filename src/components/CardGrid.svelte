<script lang="ts">
	import { startIndex, endIndex } from "$lib/store";
	import Card from "$components/Card.svelte";

	export let pokemonsToDisplay;
</script>

<section class="section">
	<div class="card-grid">
		{#each pokemonsToDisplay.slice($startIndex, $endIndex) as pokemon (pokemon.id)}
			<Card {pokemon} />
		{/each}
	</div>
</section>

<style>
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 8.001rem));
		place-content: center;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.card-grid {
			grid-template-columns: repeat(auto-fit, minmax(280px, 281px));
		}
	}
</style>
