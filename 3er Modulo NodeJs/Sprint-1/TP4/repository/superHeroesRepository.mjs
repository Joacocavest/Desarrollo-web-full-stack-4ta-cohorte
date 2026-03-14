import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperHeroesDataSource from './superHeroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperHeroesFileRepository extends SuperHeroesDataSource {
    constructor() {
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    obtenerTodos() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }
}