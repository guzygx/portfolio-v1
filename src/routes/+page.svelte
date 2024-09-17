<script>
	// import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/works');
	});

	// if (browser) {
	// 	window.location.href = '/works';
	// }
</script>
