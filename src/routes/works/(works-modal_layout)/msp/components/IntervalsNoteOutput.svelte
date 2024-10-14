<script>
	export let device;

	let intervalOutputNumber, intervalOutputNote;
	$: intervalOutputNote = getNote(intervalOutputNumber);

	$: device && subscribe();

	const subscribe = () => {
		device.messageEvent.subscribe((e) => {
			if (e.tag === 'out2') {
				intervalOutputNumber = e.payload;
			}
		});
	};

	const getNote = (number) => {
		const notesIndex = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
		const octave = Math.floor(number / 12);
		const remainder = number % 12;
		return `${notesIndex[remainder]}-${octave}`;
	};
</script>

<p>{intervalOutputNumber ? intervalOutputNote : ''}</p>
