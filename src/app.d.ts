// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Pokemon {
		id: number;
		name: {
			english: string;
			japanese: string;
			chinese: string;
			french: string;
		};
		type: string[];
		base?: {
			HP: number;
			Attack: number;
			Defense: number;
			"Sp. Attack": number;
			"Sp. Defense": number;
			Speed: number;
		};
		species: string;
		description: string;
		evolution?: {
			prev?: string[];
			next?: string[];
		};
		profile: {
			height: string;
			weight: string;
			egg: string[];
			ability: Array<string[]>;
			gender: string;
		};
		image: {
			sprite: string;
			thumbnail: string;
			hires: string;
		};
	}
}

export {};
