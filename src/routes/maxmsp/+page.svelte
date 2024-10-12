<script>
	import { sendDeviceMessage, createDeviceInstance } from '$lib/utils/rnbo';

	let context, device, output, result;

	const start = async () => {
		context = new (window.AudioContext || window.webkitAudioContext)();
		output = context.createGain().connect(context.destination);
		createDeviceInstance("rnbo/test-export/patch.export.json", context, output).then(
			(response) => {
				device = response;
			}
		);
	};

</script>
<button on:click={start}>START</button>
<button on:click={() => sendDeviceMessage(device, 'in2', 0)}>0</button>
<button on:click={() => sendDeviceMessage(device, 'in2', 1)}>1</button>


