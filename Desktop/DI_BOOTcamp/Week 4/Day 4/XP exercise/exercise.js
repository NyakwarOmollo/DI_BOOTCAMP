

//EXERCISE 1
console.log("EXERCISE 1: compareToTen");

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

// Tests
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));   // Should reject

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));   // Should resolve


//EXERCISE 2
console.log("\nEXERCISE 2: Promise that resolves after 4 seconds");

const successPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

successPromise
    .then(result => console.log("Exercise 2:", result))
    .catch(error => console.log(error));


//EXERCISE 3 
console.log("\nEXERCISE 3: Resolve & Reject");

Promise.resolve(3)
    .then(value => console.log("Exercise 3 - Resolved with:", value));

Promise.reject("Boo!")
    .then(value => console.log(value))
    .catch(error => console.log("Exercise 3 - Rejected with:", error));


