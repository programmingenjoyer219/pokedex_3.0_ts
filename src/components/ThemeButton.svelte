<script lang="ts">
	export let dark: Boolean = true;
</script>

<button
	class="size-12 rounded-full text-white absolute top-2 right-4 bg-blue-600 hover:bg-blue-800 transition-all duration-200"
	on:click
>
	{#if dark}
		<i class="ri-sun-fill"></i>
	{:else}
		<i class="ri-moon-fill"></i>
	{/if}
</button>
