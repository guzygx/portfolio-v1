<script>
	import content from './content/en.json';
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';
</script>

<div
	class="w-full h-screen"
	in:rightSlide
	out:backSlide
>
	<div class="overflow-scroll no-scrollbar p-12 ml-96">
		<p class=" text-6xl font-display">
			<span>{content.email_title}:</span>
			<span>{content.email}</span>
		</p>
		<p class=" text-6xl font-display">
			<span>{content.instagram_title}:</span>
			<span>{content.instagram}</span>
		</p>
	</div>
</div>
