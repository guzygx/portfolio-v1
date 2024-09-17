<script>
	import content from './content/en.json';
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';
</script>

<div
	class="w-full h-screen text-invert flex justify-center font-display"
	in:rightSlide
	out:backSlide
>
	<div class="overflow-scroll no-scrollbar pt-12 text-6xl max-[980px]:text-5xl max-[760px]:text-4xl max-[480px]:text-3xl">
		<p class="mb-4">
			<span>{content.email_title}:</span>
			<span><a href="mailto:gxuzxu@protonmail.com" class="text-bright-blue">{content.email}</a></span>
		</p>
		<p>
			<span>{content.instagram_title}:</span>
			<span><a href="https://www.instagram.com/gxuzxu" class="text-salmon">{content.instagram}</a></span>
		</p>
	</div>
</div>
