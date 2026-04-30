// colorful-message.js
import chalk from 'chalk';

export function showColorfulMessage() {
    console.log(chalk.bold.green("🎉 Daily Challenge Successfully Completed!"));
    console.log(chalk.blue("Node.js modules are powerful and fun to use!"));
    console.log(chalk.yellow("You are learning: Modules + npm + File System"));
    console.log(chalk.magentaBright("Keep pushing forward! You're doing great! 🔥"));
}

export default showColorfulMessage;