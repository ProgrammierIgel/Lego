import { flaschenpost } from 'flaschenpost';
import type { PortsOnHub } from '../PortsOnHub';
import type { Construction } from './Construction';

const logger = flaschenpost.getLogger();

const handleMotorRequest = ({
	speed,
	construction,
	port,
}: {
	speed: number;
	port: PortsOnHub;
	construction: Construction;
}): void => {
	switch (port) {
		case 'a':
			if (speed < 0) {
				construction.turnMotorALeft({ speed });
			} else if (speed === 0) {
				construction.stopMotorA();
			} else {
				construction.turnMotorARight({ speed });
			}
			return;

		case 'b':
			if (speed < 0) {
				construction.turnMotorBLeft({ speed });
			} else if (speed === 0) {
				logger.info("TEST")
				construction.stopMotorB();
			} else {
				construction.turnMotorBRight({ speed });
			}
			return;

		case 'c':
			logger.debug("PROTECTED -> CAN'T EXECUTE -> SAFETY (C)");
			return;
		// if (speed < 0) {
		// 	construction.turnMotorALeft({ speed });
		// } else if (speed === 0) {
		// 	construction.stopMotorA();
		// } else {
		// 	construction.turnMotorARight({ speed });
		// }
		// return;

		case 'd':
			logger.debug("PROTECTED -> CAN'T EXECUTE -> SAFETY (D)");
			return;
		// if (speed < 0) {
		// 	construction.turnMotorALeft({ speed });
		// } else if (speed === 0) {
		// 	construction.stopMotorA();
		// } else {
		// 	construction.turnMotorARight({ speed });
		// }
		// return;
	}
};

export { handleMotorRequest };
