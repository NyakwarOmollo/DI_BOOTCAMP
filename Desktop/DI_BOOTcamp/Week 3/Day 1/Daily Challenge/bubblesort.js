const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log("Original array:", numbers);

// PART 1 & 2

// 1. Using .toString() method
const str1 = numbers.toString();
console.log("\n1. Using toString():", str1);

// 2. Using .join() method with different separators
const str2 = numbers.join();           // default is comma
const str3 = numbers.join("+");
const str4 = numbers.join(" ");
const str5 = numbers.join("");         // no separator

console.log("2. Using join() default (comma) :", str2);
console.log("   Using join('+')            :", str3);
console.log("   Using join(' ')            :", str4);
console.log("   Using join('') (no space)  :", str5);


//  BONUS: Bubble Sort (Descending Order) 

console.log("\n=== BONUS: Bubble Sort in Descending Order ===");

let arr = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];   // copy of original array

console.log("Before sorting:", arr);

for (let i = 0; i < arr.length - 1; i++) {
    console.log(`\nPass ${i + 1}:`);

    for (let j = 0; j < arr.length - 1 - i; j++) {
        // Compare adjacent elements
        if (arr[j] < arr[j + 1]) {
            // Swap using temporary variable
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            console.log(`   Swapped ${arr[j + 1]} and ${arr[j]} →`, [...arr]);
        }
    }
}

console.log("\nFinal sorted array (Descending):", arr);
// Expected Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]