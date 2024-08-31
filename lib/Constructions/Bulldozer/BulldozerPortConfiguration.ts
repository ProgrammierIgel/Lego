import type { ProgramValue } from '../../ProgramValue';
import type { DefaultPort } from '../DefaultPort';
import type { MultiTimerPort } from '../MultiTimerPort';
import type { ProgramSelectPort } from '../ProgramSelectPort';
import type { Timer } from '../Timer';

interface BulldozerPortConfiguration {
	general: {
		a: DefaultPort;
		b: DefaultPort;
		c: ProgramSelectPort;
		d: MultiTimerPort;
	};

	a: {
		timer: Timer;
	};
	b: {
		timer: Timer;
	};
	c: {
		timer: Timer;
	};
	d: {
		programConfigurations: Record<ProgramValue, Timer>;
	};
}

export { BulldozerPortConfiguration };
