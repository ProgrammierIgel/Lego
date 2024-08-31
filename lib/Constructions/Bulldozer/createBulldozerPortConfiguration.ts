import type { ProgramValue } from '../../ProgramValue';
import type { Timer } from '../Timer';
import type { BulldozerPortConfiguration } from './BulldozerPortConfiguration';

const createBulldozerPortConfiguration = (): BulldozerPortConfiguration => {
	const programValues: ProgramValue[] = []; // TODO: Configure Programm Values
	const programs: Record<number, Timer> = {};

	// biome-ignore lint/style/useForOf: <explanation>
	for (
		let programValueIndex = 0;
		programValueIndex < programValues.length;
		programValueIndex++
	) {
		programs[programValues[programValueIndex]] = {
				timers: [],
				timerValue: 0,
		};
	}

	const bulldozerPortConfiguration: BulldozerPortConfiguration = {
		general: {
			a: {},
			b: {},
			c: {
				programValues: programValues,
				linkedPort: 'd',
			},
			d: {},
		},
		a: {
			timer: {
				timers: [],
				timerValue: 0,
			},
		},
		b: {
			timer: {
				timers: [],
				timerValue: 0,
			},
		},
		c: {
			timer: {
				timers: [],
				timerValue: 0,
				minimumValue: 0,
				maximumValue: 100_000_0000, // TODO: Configure Maximum Speed,
			},
		},
		d: {
			programConfigurations: programs,
		},
	};

	return bulldozerPortConfiguration;
};

export { createBulldozerPortConfiguration };
