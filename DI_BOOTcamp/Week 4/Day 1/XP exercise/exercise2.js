

console.log("=== EXERCISES 1 TO 4 - ANALYZING ===\n");

//EXERCISE 1 
console.log("EXERCISE 1: Analyzing the map method");

const mapResult = [1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return;
});

console.log("Output:", mapResult); 
// Expected: [2, 4, 6]


//EXERCISE 2 
console.log("\nEXERCISE 2: Analyzing the reduce method");

const reduceResult = [[0, 1], [2, 3]].reduce(
    (acc, cur) => acc.concat(cur),
    [1, 2]
);

console.log("Output:", reduceResult); 
// Expected: [1, 2, 0, 1, 2, 3]


//EXERCISE 3 
console.log("\nEXERCISE 3: Analyze this code");

const arrayNum = [1, 2, 4, 5, 8, 9];

const newArray = arrayNum.map((num, i) => {
    console.log(num, i);   // Logs number and index
    alert(num);            // Shows alert for each number
    return num * 2;
});

console.log("Final array:", newArray);

// Answer: The value of `i` is the index (0, 1, 2, 3, 4, 5)


//EXERCISE 4 : Nested arrays 
console.log("\nEXERCISE 4: Nested arrays");

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// 1. Modify to [1,2,3,[4],[5]]
const result1 = array.flat(2);
console.log("Result 1:", result1);

// Bonus: One line version
const result1Bonus = array.flat(Infinity).map(x => Array.isArray(x) ? [x] : x);
console.log("Result 1 (One line):", result1Bonus);

// 2. Modify greeting
const result2 = greeting.flat().map(word => word.trim());
console.log("Result 2:", result2);

// 3. Turn greeting into string
const result3 = greeting.flat().join(" ");
console.log("Result 3 (String):", result3);

// 4. Extract trapped 3
const result4 = trapped.flat(Infinity);
console.log("Result 4:", result4);


