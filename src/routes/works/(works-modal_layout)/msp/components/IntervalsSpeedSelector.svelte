<script>
	import { sendDeviceMessage } from '$lib/utils/rnbo';

	export let device;
	let intervalSpeed = "5000";
</script>

<select
	name="intervalSpeed"
	id="intervalSpeed"
	bind:value={intervalSpeed}
	on:change={() => sendDeviceMessage(device, 'in3', parseInt(intervalSpeed))}
>
	<option value="1000">1000</option>
	<option value="2000">2000</option>
	<option value="3000">3000</option>
	<option value="4000">4000</option>
	<option value="5000">5000</option>
</select>
