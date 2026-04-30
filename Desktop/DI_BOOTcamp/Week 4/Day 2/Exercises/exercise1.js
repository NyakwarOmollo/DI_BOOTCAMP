

// EXERCISE 1 : Location 
console.log("EXERCISE 1: Location");

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//EXERCISE 2 : Display Student Info 
console.log("\nEXERCISE 2: Display Student Info");

function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });


//EXERCISE 3 : User & id 
console.log("\nEXERCISE 3: User & id");

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log("Array of users:", usersArray);

const updatedUsers = usersArray.map(([key, value]) => [key, value * 2]);
console.log("Updated users (ID × 2):", updatedUsers);


//EXERCISE 4 : Person class 
console.log("\nEXERCISE 4: Person class");

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log("Type of member:", typeof member);


//EXERCISE 5 : Dog class 
console.log("\nEXERCISE 5: Dog class");

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

console.log("Correct Labrador constructor is Option 2");


// EXERCISE 6 : Challenges 
console.log("\nEXERCISE 6: Challenges");

console.log("[2] === [2] →", [2] === [2]);
console.log("{} === {} →", {} === {});

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;
console.log("object2.number:", object2.number);
console.log("object3.number:", object3.number);
console.log("object4.number:", object4.number);

// Animal & Mammal
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(soundMade) {
        console.log(`Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`);
        console.log(`I make this sound: ${soundMade}`);
    }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
farmerCow.sound("Moooooo");

