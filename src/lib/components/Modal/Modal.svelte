<script>
	import { goto } from '$app/navigation';

	export let showModal = true;
	let dialog;
	$: if (dialog && showModal) dialog.showModal();

	const redirectToRoot = () => {
		dialog.close();
		goto('/works');
	};
</script>

<dialog
	class="flex max-w-[90%] max-h-[90%] p-6"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => redirectToRoot()}
>
	<div
		on:click|stopPropagation
		class="min-h-full min-w-full overflow-scroll no-scrollbar"
	>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		border-radius: 0.2em;
		border: none;
		min-width: 90vw;
		min-height: 70vh;
		background-color: #eee;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
