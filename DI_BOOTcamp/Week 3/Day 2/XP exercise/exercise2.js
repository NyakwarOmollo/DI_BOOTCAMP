

//  EXERCISE 1 : Is Blank 
console.log("EXERCISE 1: Check if string is blank");

function isBlank(str) {
    return str.trim() === "";
}

console.log(isBlank(''));           // true
console.log(isBlank('abc'));        // false
console.log(isBlank('   '));        // true
console.log(isBlank(' Hello '));    // false


//EXERCISE 2 : Abbrev Name 
console.log("\nEXERCISE 2: Abbreviated Name");

function abbrevName(name) {
    let parts = name.trim().split(" ");
    if (parts.length < 2) return name;
    return parts[0] + " " + parts[1][0].toUpperCase() + ".";
}

console.log(abbrevName("Robin Singh"));   // Robin S.
console.log(abbrevName("John Doe"));      // John D.


//EXERCISE 3 : Swap Case 
console.log("\nEXERCISE 3: Swap Case");

function swapCase(str) {
    let result = "";
    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(swapCase("The Quick Brown Fox")); 
// Output: tHE qUICK bROWN fOX


//EXERCISE 4 : Omnipresent Value
console.log("\nEXERCISE 4: Omnipresent Value");

function isOmnipresent(arr, value) {
    for (let subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); // true






