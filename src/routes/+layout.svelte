<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Main from '$lib/components/Main/Main.svelte';

	$: title =
		$page.url.pathname !== '/' ? `${$page.url.pathname.replace('/', '').toUpperCase()} - ` : '';
</script>

<svelte:head>
	<title>{title}X༙྇҉ ꓨ༙྇҉ H༙྇҉ ꓕ༙྇҉ ꓶ༙྇҉ ⅄༙྇҉ Z༙྇҉ ꓵ༙྇҉ ꓨ༙྇҉</title>
	<meta
		name="description"
		content="Portfolio of digital and sound artist Marie Rossi"
	/>
</svelte:head>

<Header />
<Main>
	<slot />
</Main>
<Footer />
