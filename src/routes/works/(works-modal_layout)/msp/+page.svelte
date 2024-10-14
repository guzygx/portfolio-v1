<script>
	import { initIntervalsDevice } from './utils';

	import IntervalsControler from './components/IntervalsControler.svelte';
	import IntervalsCentSelector from './components/IntervalsCentSelector.svelte';
	import IntervalsSpeedSelector from './components/IntervalsSpeedSelector.svelte';
	import IntervalsDirectionSelector from './components/IntervalsDirectionSelector.svelte';
	import IntervalsNoteOutput from './components/IntervalsNoteOutput.svelte';

	let active = false;
	let intervals;

	const start = async () => {
		active = true;
		intervals = await initIntervalsDevice();
	};
</script>

{#if active}
	<div class="flex gap-8 flex-col">
		<IntervalsControler device={intervals} />

		<div class="flex gap-4">
			<IntervalsCentSelector device={intervals} />
			<IntervalsSpeedSelector device={intervals} />
			<IntervalsDirectionSelector device={intervals} />
		</div>

		<IntervalsNoteOutput device={intervals} />
	</div>
{:else}
	<button on:click={start}>►</button>
{/if}
