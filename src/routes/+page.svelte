<script lang="ts">
	import type { PageData } from "./$types";
	import { pokemonsPerPage, resetPaginationState } from "$lib/store";
	import Searchbar from "$components/Searchbar.svelte";
	import Marquee from "$components/Marquee.svelte";
	import CardGrid from "$components/CardGrid.svelte";
	import Pagination from "$components/Pagination.svelte";

	export let data: PageData;
	$: ({ pokemons } = data);
	$: pokemonsToDisplay = pokemons;
	$: totalPages = Math.ceil(pokemonsToDisplay.length / $pokemonsPerPage);

	function searchPokemonByName(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData: FormData = new FormData(form);
		const searchQuery = formData.get("searchQuery");
		pokemonsToDisplay = pokemons.filter((p) =>
			p.name.english
				.toLowerCase()
				.includes((searchQuery as string).toLowerCase())
		);
		resetPaginationState();
		form.reset();
	}

	function getPokemonsByType(type: string) {
		pokemonsToDisplay = pokemons.filter((p) => p.type.includes(type));
		resetPaginationState();
	}
</script>

<svelte:head>
	<title>Pokedex 3.0</title>
</svelte:head>

<Searchbar {searchPokemonByName} />

<Marquee {getPokemonsByType} />

{#if pokemonsToDisplay.length}
	<CardGrid {pokemonsToDisplay} />
	<Pagination {totalPages} />
{:else}
	<section class="section">
		<img class="mx-auto" src="/assets/sprites/0.png" alt="No results" />
		<h3 class="text-2xl font-semibold text-blue-600 text-center">
			No results...
		</h3>
	</section>
{/if}
