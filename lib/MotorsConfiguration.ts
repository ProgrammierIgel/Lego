import type { TimerRequest } from "./TimerRequest";

interface MotorConfiguration {
	a: {
		timers: TimerRequest[]; // TODO: Create Type
		timerValue: number;
	};
	b: {
		timers: TimerRequest[];
		timerValue: number;
	};
	c: {
		timers: TimerRequest[];
		timerValue: number;
	};
	d: {
		timers: TimerRequest[];
		timerValue: number;
	};
}

export { MotorConfiguration };
