<script>
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	export let data;
	let {
		content: {
			en: {
				description_1,
				description_2,
				materials,
				including,
				irubor,
				michelle,
				jones,
				tyers,
				grimmie,
				emmanNimedeztv,
				stone,
				odell,
				mendonca,
				janice,
				honey,
				sobiech
			}
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
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/ghostsong_data.webp',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/images/ghostsong/_DSC1999.webp'
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
	<div class="flex flex-col col-span-2">
		<img
			class="h-full object-cover"
			src={photos[3]}
			alt="GhostSong captation"
		/>
	</div>
	<div class="flex flex-col justify-between gap-4 col-span-2">
		<div>
			<p class="text-6xl">{description_1}</p>
			<p class="text-2xl">{description_2}</p>
		</div>
		<img
			src={photos[8]}
			alt="GhostSong captation"
		/>
	</div>
	<div class="col-span-2 flex flex-col justify-between gap-4">
		<div class="flex grow">
			<img
				class="object-cover"
				src={photos[6]}
				alt="GhostSong captation"
			/>
		</div>
		<div class="flex grow">
			<img
				class="object-cover"
				src={photos[7]}
				alt="GhostSong captation"
			/>
		</div>
		<div>
			<p class="text-xl">{including}</p>
			<div class="flex justify-between gap-4">
				<div>
					<p>{irubor}</p>
					<p>{michelle}</p>
					<p>{jones}</p>
				</div>
				<div>
					<p>{tyers}</p>
					<p>{grimmie}</p>
					<p>{emmanNimedeztv}</p>
				</div>
				<div>
					<p>{stone}</p>
					<p>{odell}</p>
					<p>{mendonca}</p>
				</div>
				<div>
					<p>{janice}</p>
					<p>{honey}</p>
					<p>{sobiech}</p>
				</div>
			</div>
		</div>
		<div class="flex grow">
			<img
				class="object-cover"
				src={photos[9]}
				alt="GhostSong captation"
			/>
		</div>
	</div>
	<div class="flex flex-col">
		<img
			class="h-full object-cover"
			src={photos[4]}
			alt="GhostSong captation"
		/>
	</div>
	<div class="col-span-4">
		<VideoPlayer source={videos.edit} />
	</div>
	<div class="flex flex-col">
		<img
			class="h-full object-cover"
			src={photos[5]}
			alt="GhostSong captation"
		/>
	</div>
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
		alt="swedish honey phone"
	/>
	<img
		src={phones[11]}
		alt="zach sobiech phone"
	/>
</div>
