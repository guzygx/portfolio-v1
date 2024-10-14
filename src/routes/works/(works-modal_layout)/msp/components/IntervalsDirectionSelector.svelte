<script>
	import { sendDeviceMessage } from '$lib/utils/rnbo';

	export let device;
	let intervalDirection = '0';
</script>

<select
	name="intervalDirection"
	id="intervalDirection"
	bind:value={intervalDirection}
	on:change={() => sendDeviceMessage(device, 'in2', parseInt(intervalDirection))}
>
	<option value="0">Up</option>
	<option value="1">Down</option>
</select>
