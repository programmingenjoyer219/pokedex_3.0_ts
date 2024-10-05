import type { LayoutLoad } from "./$types";
import pokemons from "$lib/pokemons.json";

export const load: LayoutLoad = async () => {
	return { pokemons };
};
