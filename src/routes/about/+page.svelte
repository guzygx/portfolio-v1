<script>
	import content from './content/en.json';
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';
</script>

<div
	class="w-full h-screen flex justify-center overflow-hidden"
	in:rightSlide
	out:backSlide
>
	<p class=" text-6xl font-display w-6/12 mt-28 ml-60">{content.description}</p>
</div>
