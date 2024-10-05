<script lang="ts">
	import { pokemonTypes, typeColor } from "$lib/store";

	export let type: string[];
</script>

<div class="flex items-center justify-center gap-2">
	{#each type as t (t)}
		<div
			style="background-color: #{typeColor[pokemonTypes.indexOf(t)]}"
			class="flex items-center p-2 gap-2 rounded-full w-[120px] shadow-sm"
		>
			<img
				src={`/assets/pokemon_types/${t.toLowerCase()}.svg`}
				class="rounded-full p-1"
				style="background-color: #{typeColor[pokemonTypes.indexOf(t)]}"
				height={28}
				width={28}
				alt={t}
			/>
			<span class="text-center w-full text-white text-sm font-semibold"
				>{t}</span
			>
		</div>
	{/each}
</div>
