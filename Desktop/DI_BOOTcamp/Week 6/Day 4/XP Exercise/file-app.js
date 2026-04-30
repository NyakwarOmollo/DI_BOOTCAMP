// file-app.js
import { readFile, writeFile } from './fileManager.js';

console.log("📁 File Management Demo\n");

readFile("Hello World.txt");

writeFile("Bye World.txt", "Writing to the file - Updated on " + new Date().toLocaleString());

console.log("\nUpdated Bye World.txt:");
readFile("Bye World.txt");