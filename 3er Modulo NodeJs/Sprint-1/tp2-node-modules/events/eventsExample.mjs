import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("saludo", () => {
    console.log("Hola desde un evento");
});

console.log("Disparando evento...");

emitter.emit("saludo");
