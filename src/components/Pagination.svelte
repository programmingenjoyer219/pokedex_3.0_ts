<script lang="ts">
	import { pokemonsPerPage, currentPage, startIndex } from "$lib/store";

	export let totalPages: number;

	function goToPreviousPage() {
		$startIndex -= $pokemonsPerPage;
		$currentPage--;
	}

	function goToNextPage() {
		$startIndex += $pokemonsPerPage;
		$currentPage++;
	}
</script>

<section class="section flex items-center justify-center">
	<div
		class="grid grid-cols-3 gap-8 bg-yellow-400 text-sm sm:text-xl text-center rounded-md font-semibold text-blue-600"
	>
		<button
			class="pagination-button"
			disabled={$currentPage === 1}
			on:click={goToPreviousPage}
		>
			<i class="ri-arrow-left-line"></i>
		</button>
		<span class="p-2 sm:p-4">{$currentPage}</span>
		<button
			class="pagination-button"
			disabled={$currentPage === totalPages}
			on:click={goToNextPage}
		>
			<i class="ri-arrow-right-line"></i>
		</button>
	</div>
</section>

<style>
	.pagination-button {
		@apply p-2 sm:p-4 shadow-md rounded-md border-2 
		border-yellow-400 hover:bg-yellow-300
		transition-all duration-200 disabled:bg-yellow-100 
		disabled:cursor-not-allowed;
	}
</style>
