'use strict';

const PoweredUP = require('node-poweredup');

const poweredUP = new PoweredUP.PoweredUP();

const alwaysTrue = true;

// Wait to discover a Hub
poweredUP.on('discover', async hub => {
  // eslint-disable-next-line no-console
  console.log(`Discovered ${hub.name}!`);

  // Connect to the Hub
  await hub.connect();

  // Make sure a motor is plugged into port A
  const motorA = await hub.waitForDeviceAtPort('A');

  // Make sure a motor is plugged into port B
  const motorB = await hub.waitForDeviceAtPort('B');

  // eslint-disable-next-line no-console
  console.log('Connected');

  // Repeat indefinitely
  // eslint-disable-next-line no-unmodified-loop-condition
  while (alwaysTrue) {
    // eslint-disable-next-line no-console
    console.log('Running motor B at speed 50');

    // Start a motor attached to port B to run a 3/4 speed (75) indefinitely
    motorB.setPower(50);
    // eslint-disable-next-line no-console
    console.log('Running motor A at speed 100 for 2 seconds');

    // Run a motor attached to port A for 2 seconds at maximum speed (100) then stop
    motorA.setPower(100);
    await hub.sleep(2_000);
    motorA.brake();

    // Do nothing for 1 second
    await hub.sleep(1_000);
    // eslint-disable-next-line no-console
    console.log('Running motor A at speed -30 for 1 second');

    // Run a motor attached to port A for 2 seconds at 1/2 speed in reverse (-50) then stop
    motorA.setPower(-30);
    await hub.sleep(2_000);
    motorA.brake();

    // Do nothing for 1 second
    await hub.sleep(1_000);
  }
});

// Start scanning for Hubs
poweredUP.scan();
// eslint-disable-next-line no-console
console.log('Scanning for Hubs...');
