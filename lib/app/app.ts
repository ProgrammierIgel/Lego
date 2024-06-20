import { Construction } from '../Construction';
import express from 'express';
import { flaschenpost } from 'flaschenpost';
import { Hub } from '../Hub';
import { Machinery } from '../Machinery';
import path from 'path';
import { ResponseBodyMotorControl } from '../types/ResponseBodyMotorControl';
import * as errors from '../errors';

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

app.post('/', (request, response): void => {
  const reqBody: Uint8Array[] = [];

  request.on('data', (chunk: Uint8Array): void => {
    reqBody.push(chunk);
  });

  request.on('end', async (): Promise<void> => {
    const dataRequestString = Buffer.concat(reqBody).toString();
    const controlObject: ResponseBodyMotorControl = {};

    const dataRequestParts = dataRequestString.split('&');

    dataRequestParts.forEach((controlPair): void => {
      const splittedParts = controlPair.split('=').map((controlPairChunk): string => controlPairChunk.toString());

      controlObject[splittedParts[0]] = splittedParts[1];
    });

    switch (controlObject.motor) {
      case 'A':
        logger.debug('A');
        switch (controlObject.action) {
          case 'left':
            machinery.currentConstructionMotorALeft(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'right':
            machinery.currentConstructionMotorARight(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'stop':
            machinery.currentConstructionMotorAStop().catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          default:
            response.end('1');
            throw new errors.IncorrectDataRequest();
        }
        break;
      case 'B':
        logger.debug('B');

        switch (controlObject.action) {
          case 'left':
            machinery.currentConstructionMotorBLeft(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'right':
            machinery.currentConstructionMotorBRight(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'stop':
            machinery.currentConstructionMotorBStop().catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          default:
            response.end('1');
            throw new errors.IncorrectDataRequest();
        }
        break;

      case 'C':
        switch (controlObject.action) {
          case 'left':
            machinery.currentConstructionMotorCLeft(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'right':
            machinery.currentConstructionMotorCRight(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'stop':
            machinery.currentConstructionMotorCStop().catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          default:
            response.end('1');
            throw new errors.IncorrectDataRequest();
        }
        break;

      case 'D':
        switch (controlObject.action) {
          case 'left':
            machinery.currentConstructionMotorDLeft(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'right':
            machinery.currentConstructionMotorDRight(Number(controlObject.speed)).catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          case 'stop':
            await machinery.currentConstructionMotorDStop().catch((): void => {
              response.end('1');
              throw new errors.MotorError();
            });
            break;
          default:
            response.end('1');
            throw new errors.IncorrectDataRequest();
        }
        break;

      default:
        response.end('1');
        throw new errors.IncorrectDataRequest();
    }

    response.end(0);
  });
});

app.get('/', (request, response): void => {
  response.sendFile(path.join(__dirname, '/../templates/index.html'));
});

app.listen(3_000);
