import type { TimerRequest } from '../TimerRequest';

interface Timer {
	timers: TimerRequest[];
	timerValue: number;
	minimumValue?: number;
	maximumValue?: number;
}

export { Timer };
