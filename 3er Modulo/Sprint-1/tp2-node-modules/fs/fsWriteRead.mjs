import fs from "fs";

const fileName = "example.txt";

fs.writeFileSync(fileName, "Hola Node.js");

console.log("Archivo creado");

const data = fs.readFileSync(fileName, "utf8");

console.log("Contenido:", data);