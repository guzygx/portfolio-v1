<script>
	export let intervalOutputNumber, intervalOutputNote;
	$: intervalOutputNote = getNote(intervalOutputNumber);

	const getNote = (number) => {
		const notesIndex = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
		const octave = Math.floor(number / 12);
		const remainder = number % 12;
		return `${notesIndex[remainder]}-${octave}`;
	};
</script>

<p>{intervalOutputNumber ? intervalOutputNote : ''}</p>
