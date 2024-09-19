<script>
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	export let data;
	let {
		content: {
			en: { description_1, description_2, description_3, materials }
		}
	} = data;

	let videos = {
		captationJuin:
			'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/videos/Captation%20Juin%202024%20Compressed%203.mp4'
	};
	let photos = [
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/echosystem/20240618_175855.jpg',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/echosystem/20240620_181237.jpg',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/echosystem/light-cover.jpg'
	];
</script>

<p class="text-2xl">EC(H)OSYSTEM - 2024</p>
<hr />
<p>{materials}</p>
<br />

<div class="grid grid-cols-6 gap-4 max-w-full">
	<!-- <p class="col-span-3 col-start-2"> -->
	<div class="col-span-4">
		<VideoPlayer source={videos.captationJuin} />
		<div class="grid grid-cols-2 gap-4 max-w-full max-h-full">
			<p class="text-2xl mt-6 col-span-2">{description_2}</p>
			<img
				class="mt-2 col-span-2"
				src={photos[2]}
				alt="Ec(h)osystem captation"
			/>
			<p class="text-2xl col-span-2">{description_3}</p>
		</div>
	</div>
	<div class="col-span-2 col-start-5">
		<p class="text-3xl">{description_1}</p>
		<img
			class="mt-10"
			src={photos[0]}
			alt="Ec(h)osystem captation"
		/>
		<img
			class="mt-10"
			src={photos[1]}
			alt="Ec(h)osystem captation"
		/>
	</div>
</div>
