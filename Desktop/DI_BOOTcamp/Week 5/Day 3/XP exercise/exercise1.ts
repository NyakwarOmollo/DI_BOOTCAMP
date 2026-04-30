
// Exercise 1: Access Modifiers

class Employee {
    private name: string;        // Can only be accessed inside this class
    private salary: number;      // Can only be accessed inside this class
    public position: string;     // Can be accessed anywhere
    protected department: string; // Can be accessed in this class and subclasses

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    // Example of protected access (can be used in subclass)
    protected getDepartment(): string {
        return this.department;
    }
}

// Test Exercise 1
const emp = new Employee("Calvin", 75000, "Software Engineer", "IT");
console.log(emp.getEmployeeInfo());
console.log(emp.position);        // Public - accessible
// console.log(emp.name);         //  Error: private
// console.log(emp.department);   // Error: protected



// Exercise 2: Readonly Properties

class Product {
    readonly id: number;        // Cannot be changed after initialization
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

// Test Exercise 2
const laptop = new Product(101, "Dell XPS 15", 1299);
console.log(laptop.getProductInfo());
console.log(laptop.id);        //  Can read
// laptop.id = 202;            //  Error: Cannot assign to 'id' because it is read-only


// ====================
// Exercise 3: Class Inheritance
// ====================
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);        // Call parent constructor
    }

    // Method Overriding
    makeSound(): string {
        return "Woof Woof! 🐶";
    }
}

// Test Exercise 3
const myDog = new Dog("Max");
console.log(myDog.name);           // Inherited from Animal
console.log(myDog.makeSound());    // Overridden method


// ====================
// Exercise 4: Static Properties and Methods
// ====================
class Calculator {

    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    // Example of static property
    static PI: number = 3.14159;
}

// Test Exercise 4 (No need to create instance)
console.log("Addition:", Calculator.add(10, 5));
console.log("Subtraction:", Calculator.subtract(20, 8));
console.log("PI value:", Calculator.PI);


// ====================
// Exercise 5: Interfaces with Optional & Readonly
// ====================
interface User {
    readonly id: number;        // Cannot be changed
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;   // Optional property
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}

// Test Exercise 5
const premiumUser: PremiumUser = {
    id: 1001,
    name: "Calvin",
    email: "calvin@example.com",
    membershipLevel: "Gold"
};

printUserDetails(premiumUser);