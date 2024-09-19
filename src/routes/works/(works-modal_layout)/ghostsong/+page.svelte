<script>
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	export let data;
	let {
		content: {
			en: { description_1, description_2, materials }
		}
	} = data;

	let videos = {
		edit: 'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/videos/Captation%20Juin%202024%20Compressed%203.mp4'
	};

	let photos = [
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC1998.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3240.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3239.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143154.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143143.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143049.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3244.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3255.webp'
	];
</script>

<p class="text-2xl">GHOSTSONG - 2024</p>
<hr />
<p>{materials}</p>
<br />

<div class="grid grid-cols-6 gap-4 max-w-full">
	<img
		class="col-span-2"
		src={photos[3]}
		alt="GhostSong captation"
	/>
	<p class="text-3xl col-span-2">{description_1}</p>
	<div class="col-span-2 flex flex-col justify-between gap-4">
		<VideoPlayer source={videos.edit} />
		<div class="flex grow">
			<img
				class="object-cover"
				src={photos[7]}
				alt="GhostSong captation"
			/>
		</div>
		<img
			src={photos[6]}
			alt="GhostSong captation"
		/>
	</div>
	<img
		src={photos[4]}
		alt="GhostSong captation"
	/>
	<p class="text-2xl col-span-3">{description_2}</p>
	<div class="flex">
		<img
			class="object-cover"
			src={photos[0]}
			alt="GhostSong captation"
		/>
	</div>
	<img
		src={photos[5]}
		alt="GhostSong captation"
	/>
</div>
