<script>
	import ModalButton from '$lib/components/Modal/ModalButton.svelte';
</script>

<div class="flex flex-col">
	<ModalButton>
		<span slot="button-label">Heyyy</span>
		<div slot="modal-content">
			<h2 class="font-body text-3xl">Testtt</h2>
		</div>
	</ModalButton>

	<ModalButton>
		<span slot="button-label">Heyyy</span>
		<div slot="modal-content">
			<h2>
				modal
				<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
			</h2>

			<ol class="definition-list">
				<li>of or relating to modality in logic</li>
				<li>
					containing provisions as to the mode of procedure or the manner of taking effect —used of
					a contract or legacy
				</li>
				<li>of or relating to a musical mode</li>
				<li>of or relating to structure as opposed to substance</li>
				<li>
					of, relating to, or constituting a grammatical form or category characteristically
					indicating predication
				</li>
				<li>of or relating to a statistical mode</li>
			</ol>

			<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
		</div>
	</ModalButton>
</div>
