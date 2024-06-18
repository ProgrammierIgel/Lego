import { Hub } from './Hub';

class Construction {
  protected hubs: Hub[];

  protected currentHubIndex: number;

  public constructor () {
    this.currentHubIndex = 0;
    this.hubs = [];
  }

  public addHub (hub: Hub): number {
    this.hubs.push(hub);

    return this.hubs.length - 1;
  }

  public switchCurrentHubLeft (): void {
    this.currentHubIndex -= 1;
    if (this.currentHubIndex < 0) {
      this.currentHubIndex = this.hubs.length - 1;
    }
  }

  public switchCurrentHubRight (): void {
    this.currentHubIndex += 1;
    if (this.currentHubIndex === this.hubs.length) {
      this.currentHubIndex = 0;
    }
  }

  /* eslint-disable @typescript-eslint/naming-convention */

  public async currentHubMotorALeft (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorA_left(speed);
  }

  public async currentHubMotorBLeft (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorB_left(speed);
  }

  public async currentHubMotorCLeft (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorC_left(speed);
  }

  public async currentHubMotorDLeft (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorD_left(speed);
  }

  public async currentHubMotorAStop (): Promise<void> {
    await this.hubs[this.currentHubIndex].motorA_stop();
  }

  public async currentHubMotorBStop (): Promise<void> {
    await this.hubs[this.currentHubIndex].motorB_stop();
  }

  public async currentHubMotorCStop (): Promise<void> {
    await this.hubs[this.currentHubIndex].motorC_stop();
  }

  public async currentHubMotorDStop (): Promise<void> {
    await this.hubs[this.currentHubIndex].motorD_stop();
  }

  public async currentHubMotorARight (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorA_right(speed);
  }

  public async currentHubMotorBRight (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorB_right(speed);
  }

  public async currentHubMotorCRight (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorC_right(speed);
  }

  public async currentHubMotorDRight (speed: number): Promise<void> {
    await this.hubs[this.currentHubIndex].motorD_right(speed);
  }
  /* eslint-enable @typescript-eslint/naming-convention */

  public getHubLength (): number {
    return this.hubs.length;
  }

  public getHubs (): Hub[] {
    return this.hubs;
  }

  public getCurrentHubIndex (): number {
    return this.currentHubIndex;
  }
}

export { Construction };
