<script>
	import DottedLine from './components/DottedLine.svelte';
	import NavBar from './components/NavBar.svelte';
	import Title from './components/Title.svelte';
	import Separator from './components/Separator.svelte';
	import { page } from '$app/stores'; 

	$: pathname = $page.url.pathname;
</script>

<header class=" py-0.5 font-display text-5xl fixed">
	<div class="w-full min-[760px]:flex gap-3.5">
		<Title />
		<Separator />
		<NavBar pathname={pathname}/> 
	</div>
	<DottedLine />
</header>
