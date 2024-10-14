<script>
	import { sendDeviceMessage } from '$lib/utils/rnbo';
	export let device;
</script>

<div class="flex gap-4">
	<button on:click={() => sendDeviceMessage(device, 'in4', -1)}>INIT</button>
	<button on:click={() => sendDeviceMessage(device, 'in4', 1)}>START</button>
	<button on:click={() => sendDeviceMessage(device, 'in4', 0)}>STOP</button>
</div>
