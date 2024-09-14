<script>
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';

	const woodblockHeight = tweened(0, {
		duration: 200
	});

	$: woodblockHeightPercentage = `${$woodblockHeight}%`;

	onMount(() => {
		woodblockHeight.set(100);

		return () => {
			woodblockHeight.set(0);
		};
	});
</script>

<div
	class="absolute text-5xl left-[320px] top-0 pointer-events-none overflow-hidden max-h-full growing"
	style="--woodblock-height: {woodblockHeightPercentage}"
>
	{#each Array(64) as _}
		<p class="woodblock font-display">||</p>
	{/each}
</div>

<style>
	.woodblock {
		line-height: 0.5;
	}
	.growing {
		height: var(--woodblock-height);
	}
</style>
