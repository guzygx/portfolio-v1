import { sendDeviceMessage, createDeviceInstance } from '$lib/utils/rnbo';

export const initIntervalsDevice = async () => {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const output = context.createGain().connect(context.destination);
  const randomSeed = Math.floor(Math.random() * 999) + 1;

  const intervals = await createDeviceInstance('rnbo/relative-intervals/patch.export.json', context, output)
  sendDeviceMessage(intervals, 'in5', randomSeed);

  return intervals;
}
