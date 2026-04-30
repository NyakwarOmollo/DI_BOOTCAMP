const marioGame = {
  detail: "An amazing game!",
  characters: {
      mario: {
        description: "Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser: {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach: {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

// 1. Convert JS object to JSON string
const jsonString = JSON.stringify(marioGame);
console.log(jsonString);

// 2. Pretty print the JSON (with indentation)
const prettyJson = JSON.stringify(marioGame, null, 4);
console.log(prettyJson);

// 3. To see it in the debugger:
//    - Put a breakpoint on the line below
console.log("Check the console and debugger for the JSON object");