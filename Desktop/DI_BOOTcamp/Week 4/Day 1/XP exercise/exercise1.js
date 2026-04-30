

// EXERCISE 1 : Colors 
console.log("EXERCISE 1: Colors");

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display colors with #
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists
console.log(colors.includes("Violet") ? "Yeah" : "No...");


//EXERCISE 2 : Colors #2 
console.log("\nEXERCISE 2: Colors #2");

const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let number = index + 1;
    let suffix = (number % 100 >= 11 && number % 100 <= 13) ? "th" : 
                 ordinal[number] || "th";
    
    console.log(`${number}${suffix} choice is ${color}.`);
});


//EXERCISE 3 : Analyzing 
console.log("\nEXERCISE 3: Analyzing");

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log("Result 1:", result);

const country = "USA";
console.log("Result 2:", [...country]);

let newArray = [...[,,]];
console.log("Bonus:", newArray);


//EXERCISE 4 : Employees
console.log("\nEXERCISE 4: Employees");

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// 1. Welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log("Welcome messages:", welcomeStudents);

// 2. Full Stack Residents
const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log("Full Stack Residents:", fullStackResidents);

// 3. Bonus: Last names of Full Stack Residents
const fullStackLastNames = users
    .filter(user => user.role === "Full Stack Resident")
    .map(user => user.lastName);

console.log("Full Stack Last Names:", fullStackLastNames);


//EXERCISE 5 : Star Wars 
console.log("\nEXERCISE 5: Star Wars");

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, word) => acc + " " + word);
console.log("Star Wars sentence:", sentence.trim());


//EXERCISE 6 : Employees #2 
console.log("\nEXERCISE 6: Employees #2");

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log("Students who passed:", passedStudents);

// 2. Bonus: Congratulate passed students
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});

