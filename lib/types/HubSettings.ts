import { MotorProperties } from './MotorProperties';
import { MotorUnexisting } from './MotorUnexisting';

interface HubSettings {
  MotorA: MotorProperties | MotorUnexisting;
  MotorB: MotorProperties | MotorUnexisting;
  MotorC: MotorProperties | MotorUnexisting;
  MotorD: MotorProperties | MotorUnexisting;
}

export { HubSettings };
