
//  ALL EXERCISES 

console.log("=== DAILY CHALLENGE - ALL EXERCISES ===\n");

//  EXERCISE 1 
console.log("EXERCISE 1: Numbers Divisible by 23");

function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let output = "";

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            output += i + " ";
            sum += i;
        }
    }
    console.log(output.trim());
    console.log("Sum :", sum);
}

displayNumbersDivisible(23);


//  EXERCISE 2 
console.log("\nEXERCISE 2: Shopping List");

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    console.log("Items in cart:", shoppingList);

    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;                    
            console.log(`   ${item} - $${prices[item]} (stock left: ${stock[item]})`);
        } else {
            console.log(`   ${item} - Out of stock!`);
        }
    }
    console.log("Total bill: $" + total.toFixed(2));
    return total;
}

myBill();


//  EXERCISE 3 
console.log("\nEXERCISE 3: What's in my wallet?");

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let totalMoney = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalMoney += amountOfChange[i] * coinValues[i];
    }

    return totalMoney >= itemPrice;
}

console.log("Can afford $4.25?", changeEnough(4.25, [25, 20, 5, 0]));
console.log("Can afford $14.11?", changeEnough(14.11, [2, 100, 0, 0]));


// EXERCISE 4 - FIXED FOR NODE.JS 
console.log("\nEXERCISE 4: Vacation Costs");

function hotelCost() {
    // Default value for Node.js (no prompt)
    let nights = 5;   // You can change this default
    console.log(`(Using default: ${nights} nights in hotel)`);
    return nights * 140;
}

function planeRideCost() {
    let destination = "Paris";   // Default value
    console.log(`(Using default destination: ${destination})`);
    
    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days = 7;   // Default value
    console.log(`(Using default: ${days} days car rental)`);
    
    let cost = days * 40;
    if (days > 10) cost *= 0.95;
    return cost;
}

function totalVacationCost() {
    console.log("\n--- Calculating your vacation cost ---");
    
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    const total = hotel + plane + car;

    console.log(`Hotel cost: $${hotel}`);
    console.log(`Plane ticket: $${plane}`);
    console.log(`Car rental: $${car}`);
    console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();


console.log("\n=== ALL EXERCISES COMPLETED ===");