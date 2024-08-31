import type { Hub } from 'node-poweredup';
import type { PortsOnHub } from '../PortsOnHub';
import * as errors from '../errors';
import type { Timer } from './Timer';

class Construction {
	protected readonly hub: Hub;

	constructor(hub: Hub) {
		this.hub = hub;
	}

	public disconnectConstruction() {
		this.stopMotor({ port: 'a' });
		this.stopMotor({ port: 'b' });
		this.stopMotor({ port: 'c' });
		this.stopMotor({ port: 'd' });
		this.hub.disconnect();
	}

	protected async turnMotorLeft({
		speed,
		port,
	}: {
		speed: number;
		port: PortsOnHub;
	}): Promise<void> {
		if (!(await this.hub.connected)) {
			await this.hub.connect();
		}
		await this.stopMotor({ port });
		const limitedSpeed = Math.min(Math.max(speed, 0), 100);
		if (!this.hub.getDeviceAtPort(port.toUpperCase())) {
			throw new errors.NoConnectedDevice();
		}

		(await this.hub.getDeviceAtPort(port.toUpperCase()))?.setPower(
			limitedSpeed,
		);
	}

	protected async turnMotorRight({
		speed,
		port,
	}: {
		speed: number;
		port: PortsOnHub;
	}): Promise<void> {
		if (!(await this.hub.connected)) {
			await this.hub.connect();
		}
		const limitedSpeed = Math.min(Math.max(speed, 0), 100);

		if (!this.hub.getDeviceAtPort(port.toUpperCase())) {
			throw new errors.NoConnectedDevice();
		}

		this.hub.getDeviceAtPort(port.toUpperCase())?.setPower(-limitedSpeed);
	}

	protected stopMotor({
		port,
	}: {
		port: PortsOnHub;
	}): void {
		if (!this.hub.connected) {
			this.hub.connect();
		}

		if (!this.hub.getDeviceAtPort(port.toUpperCase())) {
			throw new errors.NoConnectedDevice();
		}
		this.hub.getDeviceAtPort(port.toUpperCase())?.setPower(0);
	}

	protected startTimer({
		speed,
		timer,
	}: {
		speed: number;
		timer: Timer;
	}): void {
		const currentTime = new Date();
		const timerRequest = {
			speed: speed,
			startTime: currentTime,
		};

		timer.timers.push(timerRequest);
	}

	protected stopTimer({
		timer,
	}: {
		timer: Timer;
	}): void {
		const currentTime = new Date();

		if (timer.timers.length === 0) {
			return;
		}

		const lastElementIndex = timer.timers.length - 1;

		const startTime = timer.timers[lastElementIndex].startTime;
		const speed = timer.timers[lastElementIndex].speed;

		const timeBetween = (currentTime.getTime() - startTime.getTime()) * speed;

		timer.timerValue += timeBetween;
		timer.timers.pop();
	}

	public getCurrentTime(timer: Timer): boolean {
		const now = new Date();
		if (timer.timers.length === 0) {
			return false;
		}

		let minimumValueIsSet = false;
		let minimumValue = 0;

		let maximumValueIsSet = false;
		let maximumValue = 0;
		if (timer.minimumValue) {
			minimumValueIsSet = true;
			minimumValue = timer.minimumValue;
		}

		if (timer.maximumValue) {
			maximumValueIsSet = true;
			maximumValue = timer.maximumValue;
		}
		const lastElementIndex = timer.timers.length - 1;

		const startTime = timer.timers[lastElementIndex].startTime;
		const speed = timer.timers[lastElementIndex].speed;

		const time =
			(now.getTime() - startTime.getTime()) * speed + timer.timerValue;

		if (
			(minimumValueIsSet && minimumValue <= time) ||
			(maximumValueIsSet && maximumValue >= time)
		) {
			return true;
		}
		return false;
	}
	public async turnMotorALeft({ speed }: { speed: number }): Promise<void> {
		this.turnMotorLeft({ speed, port: 'a' });
	}

	public async turnMotorBLeft({ speed }: { speed: number }): Promise<void> {
		this.turnMotorLeft({ speed, port: 'b' });
	}

	public async turnMotorCLeft({ speed }: { speed: number }): Promise<void> {
		this.turnMotorLeft({ speed, port: 'c' });
	}

	public async turnMotorDLeft({ speed }: { speed: number }): Promise<void> {
		this.turnMotorLeft({ speed, port: 'd' });
	}

	public async turnMotorARight({ speed }: { speed: number }): Promise<void> {
		this.turnMotorRight({ speed, port: 'a' });
	}

	public async turnMotorBRight({ speed }: { speed: number }): Promise<void> {
		this.turnMotorRight({ speed, port: 'b' });
	}

	public async turnMotorCRight({ speed }: { speed: number }): Promise<void> {
		this.turnMotorRight({ speed, port: 'c' });
	}

	public async turnMotorDRight({ speed }: { speed: number }): Promise<void> {
		this.turnMotorRight({ speed, port: 'd' });
	}

	public stopMotorA(): void {
		this.stopMotor({ port: 'a' });
	}

	public stopMotorB(): void {
		this.stopMotor({ port: 'b' });
	}

	public stopMotorC(): void {
		this.stopMotor({ port: 'c' });
	}

	public stopMotorD(): void {
		this.stopMotor({ port: 'd' });
	}
}

export { Construction };
