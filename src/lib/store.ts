import { writable, readable, derived } from "svelte/store";

export const pokemonsPerPage = readable(12);
export const currentPage = writable(1);
export const startIndex = writable(0);
export const endIndex = derived(
	[startIndex, pokemonsPerPage],
	([$startIndex, $pokemonsPerPage]) => $startIndex + $pokemonsPerPage
);

export function resetPaginationState() {
	currentPage.set(1);
	startIndex.set(0);
}

export const pokemonTypes = [
	"Bug",
	"Dark",
	"Dragon",
	"Electric",
	"Fairy",
	"Fighting",
	"Fire",
	"Flying",
	"Ghost",
	"Grass",
	"Ground",
	"Ice",
	"Normal",
	"Poison",
	"Psychic",
	"Rock",
	"Steel",
	"Water",
];
export const typeColor = [
	"92BC2C",
	"595761",
	"0C69C8",
	"D9BE2B",
	"EE90E6",
	"D3425F",
	"FBA54C",
	"A1BBEC",
	"5F6DBC",
	"5FBD58",
	"DA7C4D",
	"75D0C1",
	"A0A29F",
	"B763CF",
	"FA8581",
	"C9BB8A",
	"5695A3",
	"539DDF",
];
