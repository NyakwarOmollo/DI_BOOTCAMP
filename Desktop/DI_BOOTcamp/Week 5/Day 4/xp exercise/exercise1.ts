

// Exercise 1: Intersection Types
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

// Intersection Type
type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
    name: "Calvin",
    age: 28,
    street: "Ngong Road",
    city: "Nairobi"
};

console.log("Exercise 1:", user);


// Exercise 2: Type Guards with Union Types
function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else if (typeof value === "string") {
        return "This is a string";
    }
    return "Unknown type";
}

console.log("Exercise 2:", describeValue(42));
console.log("Exercise 2:", describeValue("Hello TypeScript"));


// Exercise 3: Type Casting
let someValue: any = "This is a string hidden as any";

let strLength: number = (someValue as string).length;   // Type Casting using 'as'

console.log("Exercise 3: String length =", strLength);


// Exercise 4: Type Assertions with Union Types
function getFirstElement(arr: (number | string)[]): string {
    // Using type assertion to treat first element as string
    return (arr[0] as string);
}

console.log("Exercise 4:", getFirstElement(["Apple", 123, "Banana"]));
console.log("Exercise 4:", getFirstElement([99, "Mango", 77]));


// Exercise 5: Generic Constraints
function logLength<T extends { length: number }>(item: T): void {
    console.log(`Length: ${item.length}`);
}

console.log("Exercise 5:");
logLength("Hello World");           // string has .length
logLength([1, 2, 3, 4, 5]);         // array has .length
// logLength(123);                  // ❌ Error: number has no .length


// Exercise 6: Intersection Types + Type Guards
type Person2 = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
};

// Intersection Type
type Employee = Person2 & Job;

function describeEmployee(emp: Employee): string {
    if (emp.position.toLowerCase() === "manager") {
        return `${emp.name} is a Manager in the ${emp.department} department.`;
    } 
    else if (emp.position.toLowerCase() === "developer") {
        return `${emp.name} is a Developer in the ${emp.department} department.`;
    } 
    else {
        return `${emp.name} works as a ${emp.position} in ${emp.department}.`;
    }
}

const employee1: Employee = {
    name: "Calvin",
    age: 28,
    position: "Developer",
    department: "IT"
};

const employee2: Employee = {
    name: "Aisha",
    age: 35,
    position: "Manager",
    department: "HR"
};

console.log("Exercise 6:");
console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));


// Exercise 7: Type Assertions + Generic Constraints
function formatInput<T extends { toString(): string }>(input: T): string {
    // Using type assertion to ensure we treat it as string for formatting
    const str = (input as any).toString();
    return `Formatted: ${str.toUpperCase()} (${str.length} chars)`;
}

console.log("Exercise 7:");
console.log(formatInput("typescript"));
console.log(formatInput(2026));
console.log(formatInput(true));