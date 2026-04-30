// challenge.js - INTEGRATING EVERYTHING
import greet from './greeting.js';
import showColorfulMessage from './colorful-message.js';
import readFileContent from './read-file.js';

console.log("=".repeat(60));
console.log("🌟 DAILY CHALLENGE - NODE.JS MODULES");
console.log("=".repeat(60));

console.log("\nTask 1: Greeting Module");
console.log(greet("Calvin"));

console.log("\nTask 2: Colorful Message using Chalk");
showColorfulMessage();

console.log("\nTask 3: Reading File");
readFileContent();

console.log("\n" + "=".repeat(60));
console.log(chalk.bold.green("🎊 ALL TASKS COMPLETED SUCCESSFULLY! 🎊"));
console.log("=".repeat(60));