const OS = require('os');

const CPUs = OS.cpus();

const osType = OS.type();
console.log('osType', osType);

const upTime = OS.uptime();
console.log('upTime', upTime);

const freeMemory = OS.freemem();
console.log('freeMemory', freeMemory);

const totalMemory = OS.totalmem();
console.log('totalMemory', totalMemory);

const usedMemory = totalMemory - freeMemory;
const memoryUsage = Math.floor(usedMemory / totalMemory * 100);
console.log('memoryUsage', memoryUsage);

const cpuModel = CPUs[0].model;
console.log('cpuModel', cpuModel);
const cpuSpeed = CPUs[0].speed;
console.log('cpuSpeed', cpuSpeed);
const cors = CPUs.length;
console.log('cors', cors);
