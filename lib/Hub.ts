import { HubConfiguration } from './types/HubConfiguration';
import { HubSettings } from './types/HubSettings';
import * as errors from './errors';

class Hub {
  private readonly settings: HubSettings;

  private readonly configuration: HubConfiguration;

  private readonly motorA: number;

  private readonly motorB: number;

  private readonly motorC: number;

  private readonly motorD: number;

  public constructor ({ configuration, settings }: {
    configuration: HubConfiguration;
    settings: HubSettings;
  }) {
    this.configuration = configuration;
    this.settings = settings;

    if (this.settings.MotorA.existing && this.settings.MotorA.default !== undefined) {
      this.motorA = this.settings.MotorA.default;
    } else {
      this.motorA = 0;
    }

    if (this.settings.MotorB.existing && this.settings.MotorB.default !== undefined) {
      this.motorB = this.settings.MotorB.default;
    } else {
      this.motorB = 0;
    }

    if (this.settings.MotorC.existing && this.settings.MotorC.default !== undefined) {
      this.motorC = this.settings.MotorC.default;
    } else {
      this.motorC = 0;
    }

    if (this.settings.MotorD.existing && this.settings.MotorD.default !== undefined) {
      this.motorD = this.settings.MotorD.default;
    } else {
      this.motorD = 0;
    }
  }

  /* eslint-disable @typescript-eslint/naming-convention */
  // TODO [2030-12-12]: Implement motor action, Remove line below
  /* eslint-disable class-methods-use-this, @typescript-eslint/no-unused-vars*/

  public async motorA_left (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorA_stop (): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorA_right (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorB_left (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorB_stop (): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorB_right (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorC_left (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorC_stop (): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorC_right (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorD_left (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorD_stop (): Promise<void> {
    throw new errors.NotImplemented();
  }

  public async motorD_right (speed: number): Promise<void> {
    throw new errors.NotImplemented();
  }

  /* eslint-enable @typescript-eslint/naming-convention */
  // TODO [2030-12-12]: Implement motor action
  /* eslint-enable class-methods-use-this, @typescript-eslint/no-unused-vars*/
}

export { Hub };
