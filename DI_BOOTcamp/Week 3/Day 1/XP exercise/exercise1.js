//EXERCISE 1 : List of people 

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1. Remove “Greg” from the array
people.shift();
console.log("After removing Greg:", people);

// 2. Replace “James” with “Jason”
people.splice(2, 1, "Jason");   // or people[2] = "Jason";
console.log("After replacing James with Jason:", people);

// 3. Add your name to the end of the array
people.push("Calvin");   // Replace with your name if you want
console.log("After adding my name:", people);

// 4. Console.log Mary’s index
console.log("Mary's index:", people.indexOf("Mary"));

// 5. Make a copy of the array using slice (without “Mary” and your name)
const peopleCopy = people.slice(1, 3);   // skips Mary and your name
console.log("Copy without Mary and my name:", peopleCopy);

// 6. Index of “Foo”
console.log('Index of "Foo":', people.indexOf("Foo"));
// It returns -1 because "Foo" does not exist in the array.

// 7. Get the last element
const last = people[people.length - 1];
console.log("Last element:", last);


// Part II - Loops

console.log("\n--- Part II - Loops ---");

// 1. Iterate through the people array and console.log each person
console.log("All people:");
for (let person of people) {
    console.log(person);
}

// 2. Iterate and stop after logging “Devon”
console.log("\nStop after Devon:");
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}


//  EXERCISE 2 : Your favorite colors 

const colors = ["Blue", "Red", "Green", "Black", "Purple"];

console.log("\n--- Exercise 2: Favorite Colors ---");

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: 1st, 2nd, 3rd, 4th...
const suffixes = ["st", "nd", "rd", "th", "th"];

console.log("\nBonus version:");
for (let i = 0; i < colors.length; i++) {
    let suffix = suffixes[i] || "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}


//  EXERCISE 3 : Repeat the question 

console.log("\n--- Exercise 3: Repeat the question ---");

let number;
do {
    number = prompt("Please enter a number:");
    number = Number(number);   // Convert to number
} while (number < 10);

console.log("You entered a number >= 10:", number);


//  EXERCISE 4 : Building Management 

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

console.log("\n--- Exercise 4: Building Management ---");

console.log("Number of floors:", building.numberOfFloors);
console.log("Apartments on floor 1 and 3:", 
    building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

console.log("Second tenant:", building.nameOfTenants[1]);
console.log("Rooms of second tenant:", building.numberOfRoomsAndRent.dan[0]);

// Check rent condition
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to 1200");
} else {
    console.log("Dan's rent remains the same");
}


//  EXERCISE 5 : Family 

const family = {
    members: 4,
    city: "Nairobi",
    lastName: "Smith",
    pet: "Dog"
};

console.log("\n--- Exercise 5: Family ---");

console.log("Keys:");
for (let key in family) {
    console.log(key);
}

console.log("\nValues:");
for (let key in family) {
    console.log(family[key]);
}


// ====================== EXERCISE 6 : Rudolf ======================

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};

let sentence = "";
for (let key in details) {
    sentence += details[key] + " ";
}
console.log("\n--- Exercise 6 ---");
console.log(sentence.trim());


//  EXERCISE 7 : Secret Group 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = "";
for (let name of names) {
    secretName += name[0];   // Get first letter
}

secretName = secretName.split('').sort().join('');
console.log("\n--- Exercise 7: Secret Group ---");
console.log("Secret society name:", secretName);   // Output: ABJKPS