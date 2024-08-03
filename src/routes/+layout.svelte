<script>
	import '../app.css';
	import { page } from '$app/stores';
	$: title =
		$page.url.pathname !== '/' ? `${$page.url.pathname.replace('/', '').toUpperCase()} - ` : '';
</script>

<svelte:head>
	<title>{title}X༙྇҉ ꓨ༙྇҉ H༙྇҉ ꓕ༙྇҉ ꓶ༙྇҉ ⅄༙྇҉ Z༙྇҉ ꓵ༙྇҉ ꓨ༙྇҉</title>
	<meta name="description" content="Portfolio of digital and sound artist Marie Rossi">
</svelte:head>

<slot />

<style lang="postcss">
	:global(html, body) {
		background-color: rgb(34, 36, 36);
		min-height: 100%;
	}
</style>
