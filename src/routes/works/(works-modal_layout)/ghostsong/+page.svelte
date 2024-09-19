<script>
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	export let data;
	let {
		content: {
			en: { description_1, description_2, materials }
		}
	} = data;

	let videos = {
		edit: 'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/videos/echosystem/Captation%20Juin%202024%20Compressed%203.mp4'
	};

	let photos = [
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC1998.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3240.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3239.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143154.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143143.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/20240618_143049.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3244.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC3255.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/ghostsong_data.webp'
	];

	let phones = [
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/alena%20irubor.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/alena%20michelle.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/austin%20jones.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/bill%20tyers.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/cat%20janice.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/christina%20grimmie.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/emmannimedeztv.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/hannah%20stone.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/jackson%20odell.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/marilia%20mendonca.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/swedish%20honey.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/zach%20sobiech.webp'
	];
</script>

<p class="text-2xl">GHOSTSONG - 2024</p>
<hr />
<p>{materials}</p>
<br />

<div class="grid grid-cols-6 gap-4 max-w-full">
	<img
		src={phones[6]}
		alt="emmannimedeztv phone"
	/>
	<img
		src={phones[7]}
		alt="hannah stone phone"
	/>
	<img
		src={phones[8]}
		alt="jackson odell phone"
	/>
	<img
		src={phones[9]}
		alt="marilia mendonca phone"
	/>
	<img
		src={phones[4]}
		alt="cat janice phone"
	/>
	<img
		src={phones[5]}
		alt="christina grimmie phone"
	/>
	<img
		class="col-span-2"
		src={photos[3]}
		alt="GhostSong captation"
	/>
	<div class="flex flex-col justify-between gap-4 col-span-2">
		<p class="text-3xl">{description_1}</p>
		<img
			src={photos[8]}
			alt="GhostSong captation"
		/>
	</div>
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
	<img
		src={phones[0]}
		alt="alena irubor phone"
	/>
	<img
		src={phones[1]}
		alt="alena michelle phone"
	/>
	<img
		src={phones[2]}
		alt="austin jones phone"
	/>
	<img
		src={phones[3]}
		alt="bill tyers phone"
	/>
	<img
		src={phones[10]}
		alt="christina grimmie phone"
	/>
	<img
		src={phones[11]}
		alt="zach sobiech phone"
	/>
</div>
