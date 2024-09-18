<script>
	export let data;
	let {
		content: {
			en: { description_1, materials }
		}
	} = data;

	let videos = {
		'edit': 'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/videos/Captation%20Juin%202024%20Compressed%203.mp4'
	}

	let photos = [
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/_DSC1998.JPG',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/_DSC3240.JPG',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/_DSC3239.JPG',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/20240618_143154.jpg',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/20240618_143143.jpg',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/20240618_143049.jpg',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/_DSC3244.JPG',
		'https://gx-public-assets.lon1.cdn.digitaloceanspaces.com/portfolio-v1/images/ghostsong/_DSC3255.JPG'
	];
</script>

<p>GHOSTSONG - 2024</p>
<hr />
<p>{materials}</p>
<br />

<div class="grid grid-cols-6 gap-4 max-w-full">
</div>
