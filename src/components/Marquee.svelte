<script>
	import { pokemonTypes, typeColor } from "$lib/store";
	export let getPokemonsByType;
</script>

<section class="section">
	<div
		class="flex items-center overflow-auto gap-4 p-4 rounded-md shadow-lg border-2 border-blue-600 dark:bg-zinc-800"
	>
		{#each pokemonTypes as type}
			<button
				title={type}
				class="flex-none flex items-center gap-2 p-2 rounded-md size-14 hover:opacity-80 hover:scale-110 hover:shadow-md transition-all duration-200"
				style="background-color: {'#' + typeColor[pokemonTypes.indexOf(type)]};"
				on:click={() => getPokemonsByType(type)}
			>
				<img src="/assets/pokemon_types/{type.toLowerCase()}.svg" alt={type} />
			</button>
		{/each}
	</div>
</section>
