<script lang="ts">
	export let index: number;
	export let value: number;
	const iconClasses = [
		"ri-heart-pulse-fill",
		"ri-sword-line",
		"ri-sword-fill",
		"ri-shield-line",
		"ri-shield-fill",
		"ri-speed-up-line",
	];

	let statBarColor = "bg-gray-400 text-gray-400";
	if (value < 50) {
		statBarColor = "bg-red-600 text-red-600";
	} else if (value < 100) {
		statBarColor = "bg-orange-400 text-orange-400";
	} else if (value < 150) {
		statBarColor = "bg-green-400 text-green-400";
	} else {
		statBarColor = "bg-green-500 text-green-500";
	}
</script>

<div class="flex gap-6 sm:gap-2">
	<div
		class="flex items-center justify-between text-sm sm:text-xl px-1 gap-2 w-1/6"
	>
		<i class="{iconClasses[index]} text-2xl"></i>
		<span class="font-semibold">{value}</span>
	</div>
	<div class="p-2 border rounded-md w-5/6">
		<div class={statBarColor} style="width: {value * 0.5}%;">.</div>
	</div>
</div>
