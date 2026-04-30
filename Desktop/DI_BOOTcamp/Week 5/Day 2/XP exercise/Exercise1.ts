// =============================================
// DI Bootcamp - Week 5 Day 2 - TypeScript Exercises
// Clean Version (No DOM)
// =============================================

// Exercise 1: Hello, World!
console.log("Hello, World!");

// Exercise 2: Type Annotations
const age: number = 25;
const name: string = "Calvin";
console.log(`Name: ${name}, Age: ${age}`);

// Exercise 3: Union Types
let id: string | number = "SW-78492";
console.log("ID:", id);

id = 78492;
console.log("ID changed to number:", id);

// Exercise 4: if...else
function checkNumber(num: number): string {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}

console.log("10 is", checkNumber(10));
console.log("-5 is", checkNumber(-5));
console.log("0 is", checkNumber(0));

// Exercise 5: Tuple
function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log("Tuple result:", details);

// Exercise 6: Object Type
type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person = createPerson("Calvin", 28);
console.log("Person object:", person);

// Exercise 8: Switch Statement
function getAction(role: string): string {
    switch (role.toLowerCase()) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

// Exercise 9: Function Overloading
function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}! Welcome to TypeScript.`;
    }
    return "Hello! Welcome to TypeScript.";
}

console.log(greet());
console.log(greet("Calvin"));