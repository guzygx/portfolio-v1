<script>
	import { rightSlide, backSlide } from '$lib/utils/custom_transitions.js';

	export let data;
	let {
		content: {
			en: { email, instagram }
		}
	} = data;
</script>

<div
	class="w-full h-screen text-invert flex justify-center font-display"
	in:rightSlide
	out:backSlide
>
	<div
		class="overflow-scroll no-scrollbar pt-12 text-6xl max-[980px]:text-5xl max-[760px]:text-4xl max-[480px]:text-3xl"
	>
		<p class="mb-4">
			<span>{email.title}:</span>
			<span
				><a
					href="mailto:gxuzxu@protonmail.com"
					class="text-bright-blue">{email.content}</a
				></span
			>
		</p>
		<p>
			<span>{instagram.title}:</span>
			<span
				><a
					href="https://www.instagram.com/gxuzxu"
					class="text-salmon">{instagram.content}</a
				></span
			>
		</p>
	</div>
</div>
