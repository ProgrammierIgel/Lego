import { Construction } from '../Construction';
import express from 'express';
import { flaschenpost } from 'flaschenpost';
import { Hub } from '../Hub';
import { Machinery } from '../Machinery';
import { Pushed } from './types/Pushed';

const machinery = new Machinery();

const bulldozer = new Construction();

const logger = flaschenpost.getLogger();

bulldozer.addHub(new Hub({
  configuration: {
    name: 'Bulldozer-Hub1'
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

machinery.addConstruction(bulldozer);

const app = express();

// In this moment unused
// let isRunningMotorA = false;
// let isRunningMotorB = false;
// let isRunningMotorC = false;
// let isRunningMotorD = false;

// let directionMotorA = false;
// let directionMotorB = false;
// let directionMotorC = false;
// let directionMotorD = false;

app.post('/', (request, responce): void => {
  const reqBody: any[] = [];



  request.on('data', (chunck): void => {
    reqBody.push(chunck);
  });

  request.on('end', async (): Promise<void> => {
    const buffer = Buffer.concat(reqBody).toString();
    const pushed: Pushed = {};

    console.log(buffer);

    const parts = buffer.split('&');

    parts.forEach((element): void => {
      const splitedParts = element.split('=');

      pushed[splitedParts[0]] = splitedParts[1];
    });

    // eslint-disable-next-line @typescript-eslint/dot-notation
    switch (pushed?.motor) {
      case 'A':
        logger.info('A');
        break;

      default:
        logger.error(`error - default-case: ${buffer['motor']}`);
    }
    responce.end();
  });
});

app.listen(3_000);
