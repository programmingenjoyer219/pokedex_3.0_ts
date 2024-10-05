<script lang="ts">
	import "../app.css";
	import "remixicon/fonts/remixicon.css";
	import ThemeButton from "$components/ThemeButton.svelte";
	import ScrollToTopButton from "$components/ScrollToTopButton.svelte";

	let dark = true;
</script>

<svelte:head>
	<title>Pokédex 3.0</title>
</svelte:head>

<main class:dark class="font-sans dark:bg-zinc-900 min-h-screen">
	<ThemeButton {dark} on:click={() => (dark = !dark)} />
	<nav class="flex justify-center items-center">
		<a href="/" class="w-[12rem] mx-auto">
			<img
				class="w-[8rem] sm:w-[12rem] mx-auto"
				src="/assets/pokemon-logo.png"
				alt="Pokemon Logo"
			/>
		</a>
	</nav>
	<ScrollToTopButton />
	<slot />
</main>
