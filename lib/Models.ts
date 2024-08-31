import type { Construction } from './lego';

class Models {
	private currentConstructionIndex: number;

	private constructions: Construction[];

	constructor() {
		this.currentConstructionIndex = 0;
		this.constructions = [];
	}

	public addConstruction(construction: Construction): number {
		this.constructions.push(construction);
		return this.constructions.length - 1;
	}

	public switchCurrentConstructionLeft(): number {
		this.currentConstructionIndex += 1;

		if (this.currentConstructionIndex > this.constructions.length - 1) {
			this.currentConstructionIndex = 0;
			return 0;
		}

		if (this.currentConstructionIndex < 0) {
			this.currentConstructionIndex = this.constructions.length - 1;
			return this.constructions.length - 1;
		}

		return this.currentConstructionIndex;
	}

	public getCurrentConstruction(): Construction | number {
		if (this.constructions.length === 0) {
			return 1;
		}

		return this.constructions[this.currentConstructionIndex];
	}

	public disconnectAll(): void {
		this.constructions.forEach((construction) => {
			construction.disconnectConstruction();
		});
	}
}

export { Models };
