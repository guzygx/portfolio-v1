<script>
	import { sendDeviceMessage, createDeviceInstance } from '$lib/utils/rnbo';

	let context, device, output, outport;

	const start = async () => {
		context = new (window.AudioContext || window.webkitAudioContext)();
		output = context.createGain().connect(context.destination);
		createDeviceInstance('rnbo/test-export/patch.export.json', context, output).then((response) => {
			device = response;
			device.messageEvent.subscribe((e) => {
				if (e.tag === 'out2') {
					console.log(e.tag, e.payload);
					outport = e.payload;
				}
			});
		});
	};
</script>

<button on:click={start}>START</button>
<button on:click={() => sendDeviceMessage(device, 'in2', 0)}>0</button>
<button on:click={() => sendDeviceMessage(device, 'in2', 1)}>1</button>

<p>{outport}</p>
