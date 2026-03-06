import os from "os";

console.log("Sistema operativo:", os.platform());
console.log("Memoria libre:", os.freemem());
console.log("Memoria total:", os.totalmem());
console.log("CPU:", os.cpus().length);
console.log("Home dir:", os.homedir());