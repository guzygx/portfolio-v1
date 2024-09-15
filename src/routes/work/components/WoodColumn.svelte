<script>
	import { slide } from 'svelte/transition';
</script>

<div
	transition:slide={{ axis: 'y', duration: 400 }}
	class="absolute text-5xl left-[320px] top-[2px] pointer-events-none overflow-hidden max-h-full"
>
	{#each Array(64) as _}
		<p class="font-display">||</p>
	{/each}
</div>
