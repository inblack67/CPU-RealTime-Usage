const OS = require('os');

const performanceData = () => {
    return new Promise(async (resolve) => {
        const CPUs = OS.cpus();

        const osType = OS.type();

        const upTime = OS.uptime();

        const freeMemory = OS.freemem();

        const totalMemory = OS.totalmem();

        const usedMemory = totalMemory - freeMemory;
        const memoryUsage = Math.floor(usedMemory / totalMemory * 100);

        const cpuModel = CPUs[0].model;
        const cpuSpeed = CPUs[0].speed;
        const cors = CPUs.length;
        const cpuLoad = await getCpuLoad();
        resolve({
            freeMemory,
            totalMemory,
            usedMemory,
            memoryUsage,
            cpuModel,
            cpuSpeed,
            cors,
            osType,
            upTime,
            cpuLoad,
        })
    })
}


// CPU Average
const CPUAvg = () => {
    const CPUs = OS.cpus();
    let idleTime = 0;
    let totalTime = 0;
    CPUs.forEach(cor => {
        for (const key in cor.times) {
            totalTime += cor.times[key];
        }
        idleTime += cor.times.idle;
    })
    return {
        // avg idle/total accross all cors
        idle: idleTime / CPUs.length,
        total: totalTime / CPUs.length,
    }
}
const getCpuLoad = () => {
    return new Promise((resolve) => {
        const start = CPUAvg();
        setTimeout(() => {
            const end = CPUAvg();
            const idleDifference = end.idle - start.idle;
            const totalDifference = end.total - start.total;
            const percentageCPU = 100 - Math.floor(100 * idleDifference / totalDifference);
            resolve(percentageCPU);
        }, 100);
    })
}
performanceData().then(data => console.log(data));