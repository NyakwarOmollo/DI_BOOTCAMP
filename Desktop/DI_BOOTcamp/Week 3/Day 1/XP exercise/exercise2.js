//  EXERCISE 1 
console.log("=== Exercise 1: Divisible by 3 ===\n");

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + " → " + (numbers[i] % 3 === 0));
}

// EXERCISE 2 
console.log("\n=== Exercise 2: Attendance ===");

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

let userName = prompt("What is your name?").toLowerCase().trim();

if (userName in guestList) {
    console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

//  EXERCISE 3 
console.log("\n=== Exercise 3: Playing with numbers ===");

let age = [20, 5, 12, 43, 98, 55];

// 1. Sum
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("Sum of all ages:", sum);

// 2. Highest age
let highest = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i];
    }
}
console.log("Highest age:", highest);