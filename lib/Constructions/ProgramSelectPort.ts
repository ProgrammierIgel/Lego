import type { PortsOnHub } from '../PortsOnHub';
import type { ProgramValue } from '../ProgramValue';

interface ProgramSelectPort {
	programValues: ProgramValue[];
	linkedPort: PortsOnHub;
}

export { ProgramSelectPort };
