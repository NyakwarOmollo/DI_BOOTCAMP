// ==================== DAILY CHALLENGE 1 ====================

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // Check if all items are strings
        if (words.every(word => typeof word === "string")) {
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        } else {
            reject("Error: Not all items in the array are strings!");
        }
    });
}

function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
        if (uppercasedWords.length > 4) {
            const sorted = [...uppercasedWords].sort(); // create a copy before sorting
            resolve(sorted);
        } else {
            reject("Error: Array must have more than 4 words to be sorted!");
        }
    });
}

// Tests
console.log(" DAILY CHALLENGE 1");

makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));