

// ====================== EXERCISE 1 : Scope ======================
console.log("EXERCISE 1: Scope");

// #1
function funcOne() {
    let a = 5;
    if (a > 1) a = 3;
    console.log(`inside the funcOne function ${a}`); // 3
}
funcOne();

// #2
let a = 0;
function funcTwo() { a = 5; }
function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}
funcThree(); // 0
funcTwo();
funcThree(); // 5

// #3
function funcFour() {
    window.a = "hello";   // Only works in browser
}
function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}
funcFour();
funcFive(); // "hello" in browser

// #4
let b = 1;
function funcSix() {
    let b = "test";
    console.log(`inside the funcSix function ${b}`); // "test"
}
funcSix();

// #5
let c = 2;
if (true) {
    let c = 5;
    console.log(`in the if block ${c}`); // 5
}
console.log(`outside of the if block ${c}`); // 2


//EXERCISE 2 : Ternary operator 
console.log("\nEXERCISE 2: Ternary Operator");

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log("Experience Points:", experiencePoints); // 10


//EXERCISE 3 : Is it a string ?
console.log("\nEXERCISE 3: Is it a string?");

const isString = (value) => typeof value === "string";

console.log(isString('hello'));        // true
console.log(isString([1, 2, 4, 0]));   // false


//EXERCISE 4 : Find the sum
console.log("\nEXERCISE 4: Find the sum");

const sum = (a, b) => a + b;
console.log("Sum(5, 10) =", sum(5, 10)); // 15


//EXERCISE 5 : Kg and grams 
console.log("\nEXERCISE 5: Kg and grams");

// Function declaration
function convertToGrams1(weight) {
    return weight * 1000;
}
console.log("Function Declaration (2kg):", convertToGrams1(2));

// Function expression
const convertToGrams2 = function(weight) {
    return weight * 1000;
};
console.log("Function Expression (3kg):", convertToGrams2(3));

// Arrow function
const convertToGrams3 = weight => weight * 1000;
console.log("Arrow Function (5kg):", convertToGrams3(5));


//EXERCISE 6 : Fortune teller 
console.log("\nEXERCISE 6: Fortune Teller");

(function(children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    console.log(sentence);
    // In browser: document.body.innerHTML += `<p>${sentence}</p>`;
})(3, "Emma", "Nairobi", "Software Engineer");


//EXERCISE 7 : Welcome 
console.log("\nEXERCISE 7: Welcome");

(function(userName) {
    console.log(`Welcome, ${userName}! 👋`);
    // In browser this would create a navbar
})( "Calvin" );


//EXERCISE 8 : Juice Bar 
console.log("\nEXERCISE 8: Juice Bar");

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        console.log(sentence);
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("strawberry", "mango", "kiwi");

    displayJuice();
}

makeJuice("large");


