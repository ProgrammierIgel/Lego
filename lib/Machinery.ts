import { Construction } from './Construction';

class Machinery {
  public readonly constructions: Construction[];

  private currentConstructionIndex: number;

  public constructor () {
    this.constructions = [];
    this.currentConstructionIndex = 0;
  }

  public switchConstructionLeft (): void {
    this.currentConstructionIndex -= 1;

    if (this.currentConstructionIndex < 0) {
      this.currentConstructionIndex = this.constructions.length - 1;
    }
  }

  public switchConstructionRight (): void {
    this.currentConstructionIndex += 1;

    if (this.currentConstructionIndex === this.constructions.length) {
      this.currentConstructionIndex = 0;
    }
  }

  public switchHubLeftOfCurrentConstruction (): void {
    this.constructions[this.currentConstructionIndex].switchCurrentHubLeft();
  }

  public switchHubRightOfCurrentConstruction (): void {
    this.constructions[this.currentConstructionIndex].switchCurrentHubRight();
  }

  public addConstruction (construction: Construction): number {
    this.constructions.push(construction);

    return this.constructions.length - 1;
  }

  /* eslint-disable @typescript-eslint/naming-convention*/
  public async currentConstructionMotorALeft (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorALeft(speed);
  }

  public async currentHubMotorBLeft (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorBLeft(speed);
  }

  public async currentHubMotorCLeft (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorCLeft(speed);
  }

  public async currentHubMotorDLeft (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorDLeft(speed);
  }

  public async currentHubMotorAStop (): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorAStop();
  }

  public async currentHubMotorBAStop (): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorBStop();
  }

  public async currentHubMotorCStop (): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorCStop();
  }

  public async currentHubMotorDStop (): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorDStop();
  }

  public async currentHubMotorARight (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorARight(speed);
  }

  public async currentHubMotorBRight (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorBRight(speed);
  }

  public async currentHubMotorCRight (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorCRight(speed);
  }

  public async currentHubMotorDRight (speed: number): Promise<void> {
    await this.constructions[this.currentConstructionIndex].currentHubMotorDRight(speed);
  }
  /* eslint-enable @typescript-eslint/naming-convention*/

  public getCurrentConstructionIndex (): number {
    return this.currentConstructionIndex;
  }
}

export { Machinery };
