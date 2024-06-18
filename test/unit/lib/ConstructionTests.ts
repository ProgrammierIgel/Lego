import { assert } from 'assertthat';
import { Construction } from '../../../lib/Construction';
import { Hub } from '../../../lib/Hub';

suite('Construction', (): void => {
  test('Add a hub to the construction.', async (): Promise<void> => {
    const construction = new Construction();

    assert.that(construction.getHubLength()).is.equalTo(0);
    assert.that(construction.getHubs().length).is.equalTo(construction.getHubLength());

    construction.addHub(new Hub({
      configuration: {
        name: 'Hub'
      },
      settings: {
        MotorA: {
          existing: false
        },
        MotorB: {
          existing: false
        },
        MotorC: {
          existing: false
        },
        MotorD: {
          existing: false
        }
      }

    }));

    assert.that(construction.getHubLength()).is.equalTo(1);
  });

  test('Switch rightward and jump to the first hub if the last is selcted.', async (): Promise<void> => {
    const construction = new Construction();

    const hub = new Hub({
      configuration: {
        name: 'Hub'
      },
      settings: {
        MotorA: {
          existing: false
        },
        MotorB: {
          existing: false
        },
        MotorC: {
          existing: false
        },
        MotorD: {
          existing: false
        }
      }
    });

    for (let index = 0; index < 5; index++) {
      construction.addHub(hub);
    }

    for (let i = 0; i < 4; i++) {
      assert.that(construction.getCurrentHubIndex()).is.equalTo(i);
      construction.switchCurrentHubRight();
    }

    construction.switchCurrentHubRight();
    assert.that(construction.getCurrentHubIndex()).is.equalTo(0);
  });

  test('Switch hub left and check if first selected and step left last is selcted.', async (): Promise <void> => {
    const construction = new Construction();

    const hub = new Hub({
      configuration: {
        name: 'Hub'
      },
      settings: {
        MotorA: {
          existing: false
        },
        MotorB: {
          existing: false
        },
        MotorC: {
          existing: false
        },
        MotorD: {
          existing: false
        }
      }
    });

    for (let index = 0; index < 5; index++) {
      construction.addHub(hub);
    }

    construction.switchCurrentHubLeft();
    assert.that(construction.getCurrentHubIndex()).is.equalTo(construction.getHubLength() - 1);

    for (let i = 4; i > 0; i--) {
      assert.that(construction.getCurrentHubIndex()).is.equalTo(i);
      construction.switchCurrentHubLeft();
    }
  });
});
