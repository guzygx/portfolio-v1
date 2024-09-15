<script>
	import content from './content/en.json';
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';
</script>

<div
	class="w-full h-screen overflow-hidden"
	in:rightSlide
	out:backSlide
>
	<p class=" text-6xl font-display mt-40 ml-96">
		<span>{content.email_title}:</span>
		<span>{content.email}</span>
	</p>
	<p class=" text-6xl font-display mt-8 ml-96">
		<span>{content.instagram_title}:</span>
		<span>{content.instagram}</span>
	</p>
</div>
