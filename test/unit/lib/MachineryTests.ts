import { assert } from 'assertthat';
import { Construction } from '../../../lib/Construction';
import { flaschenpost } from 'flaschenpost';
import { Machinery } from '../../../lib/Machinery';

const logger = flaschenpost.getLogger();

suite('Machinery', (): void => {
  test('Switch Construction Right and check if after another switch first is selected.', async (): Promise<void> => {
    const machinery = new Machinery();

    for (let i = 0; i < 5; i++) {
      machinery.addConstruction(new Construction());
    }
    assert.that(machinery.constructions.length).is.equalTo(5);

    for (let i = 0; i < 4; i++) {
      assert.that(machinery.getCurrentConstructionIndex()).is.equalTo(i);
      machinery.switchConstructionRight();
    }
    machinery.switchConstructionRight();
    assert.that(machinery.getCurrentConstructionIndex()).is.equalTo(0);
  });

  test('Switch Construction Left and check if first construction is selected and someone step annother time left the last is selected.', async (): Promise<void> => {
    const machinery = new Machinery();

    for (let i = 0; i < 5; i++) {
      machinery.addConstruction(new Construction());
    }

    machinery.switchConstructionLeft();
    assert.that(machinery.getCurrentConstructionIndex()).is.equalTo(machinery.constructions.length - 1);

    for (let i = machinery.constructions.length - 2; i > 0; i--) {
      machinery.switchConstructionLeft();
      assert.that(machinery.getCurrentConstructionIndex()).is.equalTo(i);
      logger.info(`iteration switch left: ${i}`);
    }
  });
});
