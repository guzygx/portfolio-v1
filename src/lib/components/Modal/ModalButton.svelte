<script>
	import Modal from '$lib/components/Modal/Modal.svelte';
	let showModal = false;
</script>

<button
	on:click={() => (showModal = true)}
	class="text-5xl max-[480px]:text-7xl text-pink font-display"
>
	<slot name="button-label"/>
</button>

<Modal bind:showModal>
	<slot name='modal-content' />
</Modal>