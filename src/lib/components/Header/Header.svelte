<script>
	import DottedLine from './components/DottedLine.svelte';
	import NavBar from './components/NavBar.svelte';
	import Title from './components/Title.svelte';
	import { page } from '$app/stores'; 

	$: pathname = $page.url.pathname;
</script>

<header class=" py-0.5 font-display text-5xl">
	<div class="w-full min-[760px]:flex gap-10">
		<Title />
		<NavBar pathname={pathname}/> 
	</div>
	<DottedLine />
</header>
