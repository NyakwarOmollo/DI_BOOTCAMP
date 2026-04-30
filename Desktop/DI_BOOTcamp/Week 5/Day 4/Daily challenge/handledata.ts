

// Step 1: Define the types with Discriminator ('type' property)
type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

// Union Type
type DataItem = User | Product | Order;

// Step 2: Type Guards (Very Important for Discriminated Unions)
function isUser(item: DataItem): item is User {
    return item.type === 'user';
}

function isProduct(item: DataItem): item is Product {
    return item.type === 'product';
}

function isOrder(item: DataItem): item is Order {
    return item.type === 'order';
}

// Step 3: Main Function
function handleData(data: DataItem[]): string[] {
    return data.map(item => {
        if (isUser(item)) {
            return `Hello ${item.name}, you are ${item.age} years old.`;

        } else if (isProduct(item)) {
            return `Product ID: ${item.id} - Price: $${item.price}`;

        } else if (isOrder(item)) {
            return `Order Summary: #${item.orderId} - Amount: $${item.amount}`;

        } else {
            // Graceful handling for unexpected cases
            return "Unknown data type encountered.";
        }
    });
}


// Testing the Function


const mixedData: DataItem[] = [
    { type: 'user', name: "Calvin", age: 28 },
    { type: 'product', id: 101, price: 1299 },
    { type: 'order', orderId: "ORD-78492", amount: 4500 },
    { type: 'user', name: "Aisha", age: 24 },
    { type: 'product', id: 202, price: 89.99 },
    { type: 'order', orderId: "ORD-99123", amount: 1250 }
];

console.log("=== Processing Mixed Data ===\n");

const results = handleData(mixedData);

results.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

// Test with unknown/invalid data
console.log("\n=== Testing with Invalid Data ===");
const invalidData: any[] = [
    { type: 'user', name: "Test" },           // missing age
    { type: 'unknown', value: 100 }           // completely unknown type
];

const invalidResults = handleData(invalidData as DataItem[]);
invalidResults.forEach(result => console.log(result));