<script>
	import content from './content/en.json';
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';
</script>

<div
	class="w-full h-screen min-[480px]:p-12 no-scrollbar text-bright-green text-invert flex justify-center overflow-scroll no-scrollbar"
	in:rightSlide
	out:backSlide
>
	<p class=" text-6xl font-display w-6/12 max-[760px]:w-9/12 max-[480px]:w-screen">
		{content.description}
	</p>
</div>
