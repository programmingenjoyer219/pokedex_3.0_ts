import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, params }) => {
	const { pokemons } = await parent();
	const pokemon = pokemons[+params.id - 1];
	if (!!pokemon) return { pokemon };
	console.log(`Error finding the pokemon with id: ${params.id}`);
	throw error(404, {
		message: "We couldn't find the Pokémon you are looking for",
	});
};
