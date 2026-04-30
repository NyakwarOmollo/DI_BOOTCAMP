// read-file.js
import fs from 'fs';
import path from 'path';

const filePath = path.join('files', 'file-data.txt');

export function readFileContent() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(chalk.cyan("\n📄 Content of file-data.txt:"));
        console.log(chalk.white(data));
    } catch (err) {
        console.error(chalk.red("❌ Error reading file:"), err.message);
    }
}

export default readFileContent;