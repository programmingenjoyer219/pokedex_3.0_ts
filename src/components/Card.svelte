<script lang="ts">
	import { goto } from "$app/navigation";
	import { pokemonTypes, typeColor } from "$lib/store";
	import PokemonTypeSlot from "$components/PokemonTypeSlot.svelte";
	import PokemonProfileSlot from "$components/PokemonProfileSlot.svelte";

	export let pokemon: Pokemon;

	$: ({
		id,
		name: { english },
		type,
		profile: { weight, height },
	} = pokemon);
</script>

<!-- card design for screen-width <= 640px -->
<button
	on:click={() => goto(`/pokemon/${id}`)}
	style="border: 2px solid #{typeColor[pokemonTypes.indexOf(type[0])]}"
	class="sm:hidden cursor-pointer flex flex-col items-center justify-center p-4 gap-4 rounded-md transition-all ease-out shadow-md hover:shadow-lg transform hover:-translate-y-1 dark:bg-zinc-800 dark:hover:bg-zinc-700"
>
	<img src="/assets/images/{id}.png" alt={english} class="rounded-md size-20" />
	<span
		class="p-1 text-sm rounded-sm font-semibold text-white"
		style="background-color: #{typeColor[pokemonTypes.indexOf(type[0])]};"
		>{english}</span
	>
</button>

<!-- card design for screen-width >= 640px -->
<button
	on:click={() => goto(`/pokemon/${id}`)}
	style="border: 2px solid #{typeColor[pokemonTypes.indexOf(type[0])]}"
	class="hidden cursor-pointer sm:flex flex-col items-center justify-center p-4 gap-4 rounded-md transition-all ease-out shadow-md hover:shadow-lg transform hover:-translate-y-1 dark:bg-zinc-800 dark:hover:bg-zinc-700"
>
	<img
		src="/assets/images/{id}.png"
		alt={english}
		class="rounded-md"
		height="160px"
		width="160px"
	/>
	<span class="font-bold text-xl dark:text-gray-300">{english}</span>
	<PokemonTypeSlot {type} />
	<PokemonProfileSlot {weight} {height} />
</button>
