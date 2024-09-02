import type { Hub } from 'node-poweredup';
import { Construction } from '../Construction';
import type { BulldozerPortConfiguration } from './BulldozerPortConfiguration';
import { createBulldozerPortConfiguration } from './createBulldozerPortConfiguration';

class Bulldozer extends Construction {
	public configuration: BulldozerPortConfiguration;

	constructor({ hub }: { hub: Hub }) {
		super(hub);
		this.configuration = createBulldozerPortConfiguration();
	}

	override async turnMotorALeft({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed: -speed,
			timer: this.configuration.a.timer,
		});
		// (i) That on call the motors on the left and on the right side
		// (i) moves the Vehicle in the same direction
		super.turnMotorRight({ speed, port: 'a' });
	}

	override async turnMotorBLeft({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed: -speed,
			timer: this.configuration.b.timer,
		});
		super.turnMotorLeft({ speed, port: 'b' });
	}

	override async turnMotorCLeft({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed: -speed,
			timer: this.configuration.c.timer,
		});
		super.turnMotorLeft({ speed, port: 'c' });
	}

	override async turnMotorDLeft({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed: -speed,
			timer:
				this.configuration.d.programConfigurations[
					this.configuration.c.timer.timerValue
				],
		});
		super.turnMotorLeft({ speed, port: 'd' });
	}

	override async turnMotorARight({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed,
			timer: this.configuration.a.timer,
		});
		// (i) That on call the motors on the left and on the right side
		// (i) moves the Vehicle in the same direction
		super.turnMotorLeft({ speed, port: 'a' });
	}

	override async turnMotorBRight({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed,
			timer: this.configuration.b.timer,
		});
		super.turnMotorRight({ speed, port: 'b' });
	}

	override async turnMotorCRight({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed,
			timer: this.configuration.c.timer,
		});
		super.turnMotorRight({ speed, port: 'c' });
	}

	override async turnMotorDRight({ speed }: { speed: number }): Promise<void> {
		super.startTimer({
			speed,
			timer:
				this.configuration.d.programConfigurations[
					this.configuration.c.timer.timerValue
				],
		});

		super.turnMotorRight({ speed, port: 'd' });
	}

	override stopMotorA(): void {
		super.stopMotor({ port: 'a' });
	}

	override stopMotorB(): void {
		super.stopMotor({ port: 'b' });
	}

	override stopMotorC(): void {
		super.stopMotor({ port: 'c' });
	}

	override stopMotorD(): void {
		super.stopMotor({ port: 'd' });
	}
}

export { Bulldozer };
