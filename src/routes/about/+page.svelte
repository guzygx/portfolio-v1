<script>
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';

	export let data;
	let {content: {en: {description}}} = data;
</script>

<div
	class="w-full h-screen min-[480px]:p-12 no-scrollbar text-bright-green text-invert flex justify-center overflow-scroll no-scrollbar container"
	in:rightSlide
	out:backSlide
>
	<p class=" text-6xl font-display w-6/12 max-[760px]:w-9/12 max-[480px]:w-screen">
		{description}
	</p>
</div>

<style>
	.container {
		max-height: calc(100vh - 4rem);
	}
</style>
