import path from "path";

const filePath = "./data/example.txt";

const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
const extName = path.extname(filePath);

console.log("Directorio:", dirName);
console.log("Archivo:", baseName);
console.log("Extension:", extName);

const newPath = path.join("user", "docs", "archivo.txt");

console.log("Nueva ruta:", newPath);
