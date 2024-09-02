import express from 'express';
import { flaschenpost } from 'flaschenpost';
import { PoweredUP } from 'node-poweredup';
import path from 'path';
import { Models, handleMotorRequest } from '../lego';
import { registeredDevices } from './registeredDevices';

const logger = flaschenpost.getLogger();

const models = new Models();

const pwdp = new PoweredUP();

pwdp.scan();

pwdp.on('discover', async (hub): Promise<void> => {
	const construction = registeredDevices[hub.uuid](hub);
	models.addConstruction(construction);
	logger.info(`New ${typeof construction} detected with id ${hub.uuid}`);
});

const app = express();

app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, '/../templates/index.html'));
});
app.get('/ping', (_req, res) => {
	res.end('OK');
});

app.post('/start', (req, res) => {
	const reqBody: Uint8Array[] = [];
	req.on('data', (chunk) => {
		reqBody.push(chunk);
	});

	const construction = models.getCurrentConstruction();
	if (typeof construction === 'number') {
		logger.debug('no construction');
		return;
	}

	req.on('end', () => {
		const string: string = Buffer.concat(reqBody).toString();
		if (!(string.includes('port=') && string.includes('speed='))) {
			res.end('INTERNAL SERVER ERROR');
			return;
		}

		const iPort = string.split('port=')[1].split('&')[0].toLowerCase();

		if (!(iPort === 'a' || iPort === 'b' || iPort === 'c' || iPort === 'd')) {
			res.end('INTERNAL SEVER ERROR');
			return;
		}
		const port = iPort;
		const partWithSpeed = string.split('speed=')[1].split('&')[0];
		let speed;
		if (partWithSpeed.includes('&')) {
			speed = Number(partWithSpeed.split('&')[0]);
		} else {
			speed = Number(partWithSpeed);
		}

		handleMotorRequest({
			speed: speed,
			port: port,
			construction: construction,
		});
	});

	res.end();
});

app.post('/stop', (req, res) => {
	const reqBody: Uint8Array[] = [];
	req.on('data', (chunk) => {
		reqBody.push(chunk);
	});

	const construction = models.getCurrentConstruction();
	if (typeof construction === 'number') {
		logger.debug('no construction');
		return;
	}

	req.on('end', () => {
		const string = Buffer.concat(reqBody).toString();
		if (!string.includes('port=') && string.includes('&')) {
			res.end('INTERNAL SERVER ERROR');
			return;
		}

		const _port = string.split('port=')[1].toLowerCase();

		if (!(_port === 'a' || _port === 'b' || _port === 'c' || _port === 'd')) {
			res.end('INTERNAL SEVER ERROR');
			return;
		}
		const port = _port;

		handleMotorRequest({
			speed: 0,
			port: port,
			construction: construction,
		});

		res.end();
	});
});

process.on('SIGINT', () => {
	models.disconnectAll();
	process.exit();
});

app.listen(3_000);
