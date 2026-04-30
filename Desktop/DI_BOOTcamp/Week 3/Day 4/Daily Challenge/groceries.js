// Daily Challenge: Pass By Value & Pass By Reference

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// ====================== PART 1 ======================
// 1. Create arrow function displayGroceries
const displayGroceries = () => {
    console.log("Fruits in groceries:");
    groceries.fruits.forEach(fruit => {
        console.log(`- ${fruit}`);
    });
};

// Call it
displayGroceries();


// ====================== PART 2 ======================
// 2. Create arrow function cloneGroceries
const cloneGroceries = () => {

    // a) Copy client into user (Pass by Value)
    let user = client;
    console.log(`Original client: ${client}`);
    console.log(`User before change: ${user}`);

    // Change client
    client = "Betty";
    console.log(`Client changed to: ${client}`);
    console.log(`User after change: ${user}`);   // Still "John" → Pass by Value

    console.log("------------------------");

    // b) Copy groceries into shopping (Pass by Reference)
    let shopping = groceries;

    // Change totalPrice
    shopping.totalPrice = "35$";
    console.log("Total Price changed to 35$");
    console.log("groceries.totalPrice:", groceries.totalPrice);   // Also changed
    console.log("shopping.totalPrice:", shopping.totalPrice);

    console.log("------------------------");

    // Change paid inside nested object
    shopping.other.paid = false;
    console.log("Paid status changed to false");
    console.log("groceries.other.paid:", groceries.other.paid);   // Also changed
    console.log("shopping.other.paid:", shopping.other.paid);
};

// ====================== PART 3 ======================
// Invoke the function
cloneGroceries();