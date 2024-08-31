import type { TimerRequest } from '../TimerRequest';

interface DefaultPortConfiguration {
	a: {
		minimumValue?: number;
		maximumValue?: number;
		timerValue: number;
		timers: TimerRequest[];
	};
	b: {
		minimumValue?: number;
		maximumValue?: number;
		timerValue: number;
		timers: TimerRequest[];
	};
	c: {
		minimumValue?: number;
		maximumValue?: number;
		timerValue: number;
		timers: TimerRequest[];
	};
	d: {
		minimumValue?: number;
		maximumValue?: number;
		timerValue: number;
		timers: TimerRequest[];
	};
}

export { DefaultPortConfiguration };
