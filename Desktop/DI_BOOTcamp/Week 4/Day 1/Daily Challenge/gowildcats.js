const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

// ====================== 1. Usernames with exclamation mark ======================
const usernames = [];

gameInfo.forEach(player => {
    usernames.push(player.username + "!");
});

console.log("Exercise 1:", usernames);
// Output: ["john!", "becky!", "susy!", "tyson!"]


// ====================== 2. Winners (score > 5) ======================
const winners = [];

gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log("Exercise 2:", winners);
// Output: ["becky", "susy"]


// ====================== 3. Total Score ======================
let totalScore = 0;

gameInfo.forEach(player => {
    totalScore += player.score;
});

console.log("Exercise 3: Total Score =", totalScore);
// Output: Total Score = 71


// ====================== Bonus: Using map() and filter() ======================
console.log("\n--- Bonus Solutions ---");

// Using map() for usernames with "!"
const usernamesMap = gameInfo.map(player => player.username + "!");
console.log("Usernames using map():", usernamesMap);

// Using filter() for winners
const winnersFilter = gameInfo
    .filter(player => player.score > 5)
    .map(player => player.username);

console.log("Winners using filter() + map():", winnersFilter);