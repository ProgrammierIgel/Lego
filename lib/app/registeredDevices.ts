import type { Hub } from 'node-poweredup';
import { Bulldozer } from '../lego';

type RegisteredDevicesType = Record<string, (hub: Hub) => Bulldozer>;

const registeredDevices: RegisteredDevicesType = {
	'90842b729e53': (hub) => new Bulldozer({ hub }),
};

export { registeredDevices };
