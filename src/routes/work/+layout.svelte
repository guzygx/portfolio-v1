<script>
	import WoodColumn from './components/WoodColumn.svelte';
	import SideBar from './components/SideBar.svelte';
	import Content from './components/Content.svelte';
</script>

<div class="max-[760px]:hidden">
	<div class="pt-24 font-display">
		<SideBar />
		<WoodColumn />
		<Content>
			<slot />
		</Content>
	</div>
</div>
