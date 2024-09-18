<script>
	import { blur } from 'svelte/transition';
</script>

<div class="flex justify-center mt-8">
	<div class="flex flex-col gap-4">
		<a
			transition:blur={{ amount: '10rem' }}
			href="/works/ghostsong"
			class="text-4xl text-pink font-display min-[760px]:absolute top-[132px] left-[94px]"
		>
			GhostSong (2024)
		</a>

		<a
			transition:blur={{ amount: '10rem' }}
			href="/works/echosystem"
			class="text-4xl text-pink font-display min-[760px]:absolute top-[368px] min-[1400px]:left-[1204px]"
		>
			Ec(h)osystem (2024)
		</a>
	</div>
</div>
