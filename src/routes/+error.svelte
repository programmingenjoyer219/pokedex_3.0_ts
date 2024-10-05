<script>
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Oops...</title>
</svelte:head>

<section class="section min-h-[85vh] grid place-content-center">
	<div class="flex flex-col gap-2 text-center">
		<h1 class="text-3xl sm:text-5xl font-bold text-blue-600">{$page.status}</h1>
		<img
			src="/assets/sprites/{Math.floor(Math.random() * 899)}.png"
			alt="cute pokemon"
			class="max-w-[120px] mx-auto"
		/>
		<p class="dark:text-gray-300 text-xl max-w-[60ch]">
			{#if $page.error?.message}
				{$page.error?.message}
			{:else}
				<p class="dark:text-gray-300 text-xl max-w-[60ch]">
					Oops...Something went wrong. Try refreshing.
				</p>
			{/if}
		</p>
	</div>
</section>
