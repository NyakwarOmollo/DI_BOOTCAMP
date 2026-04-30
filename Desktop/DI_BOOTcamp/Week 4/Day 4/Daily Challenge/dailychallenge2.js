// DAILY CHALLENGE 2 - Morse Code (Fixed for Node.js)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// 1. Convert JSON string to object
function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject("Error: Morse object is empty!");
        } else {
            resolve(morseJS);
        }
    });
}

// 2. Ask user for input and convert to Morse
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        readline.question("Enter a word or sentence: ", (input) => {
            const text = input.toLowerCase().trim();

            if (!text) {
                reject("Error: You didn't enter anything!");
                readline.close();
                return;
            }

            const morseArray = [];

            for (let char of text) {
                if (morseJS[char]) {
                    morseArray.push(morseJS[char]);
                } else {
                    reject(`Error: The character "${char}" does not exist in Morse code!`);
                    readline.close();
                    return;
                }
            }

            resolve(morseArray);
            readline.close();
        });
    });
}

// 3. Display the Morse code
function joinWords(morseTranslation) {
    console.log("\nMorse Code Translation:");
    console.log("=".repeat(30));
    console.log(morseTranslation.join("\n"));
    console.log("=".repeat(30));
}

// Chain the functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));