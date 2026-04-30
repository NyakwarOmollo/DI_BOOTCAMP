// =============================================
// Exercise: validateUnionType with Union Types
// =============================================

/**
 * Function that validates if a value matches one of the allowed types
 * @param value - The value to check
 * @param allowedTypes - Array of allowed type names as strings (e.g. ["string", "number", "boolean"])
 * @returns boolean - true if value type is in allowedTypes, false otherwise
 */
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    // Get the actual type of the value using typeof
    const actualType = typeof value;

    // Check if the actual type exists in the allowedTypes array
    return allowedTypes.includes(actualType);
}

// ======================
// Demonstration / Tests
// ======================

console.log("=== Type Validation Demo ===");

// Test cases
const test1 = "Hello World";                    // string
const test2 = 42;                               // number
const test3 = true;                             // boolean
const test4 = { name: "Calvin" };               // object
const test5 = [1, 2, 3];                        // object (arrays are 'object' in typeof)
const test6 = null;                             // object (special case)
const test7 = undefined;                        // undefined

// Example 1: Allow string or number (like union type string | number)
console.log("Test 1 - 'Hello World' as string | number:", 
    validateUnionType(test1, ["string", "number"]));   // true

console.log("Test 2 - 42 as string | number:", 
    validateUnionType(test2, ["string", "number"]));   // true

// Example 2: Allow only boolean
console.log("Test 3 - true as boolean:", 
    validateUnionType(test3, ["boolean"]));            // true

// Example 3: Allow string, number, or boolean
console.log("Test 4 - {object} as string | number | boolean:", 
    validateUnionType(test4, ["string", "number", "boolean"])); // false

// Example 4: Multiple allowed types
console.log("Test 5 - Array as object | string:", 
    validateUnionType(test5, ["object", "string"]));   // true

// Special cases
console.log("Test 6 - null as object | null:", 
    validateUnionType(test6, ["object"]));             // true (typeof null === 'object')

console.log("Test 7 - undefined as undefined | string:", 
    validateUnionType(test7, ["undefined", "string"])); // true

// ======================
// Extra: Real-world usage example
// ======================

function processInput(value: any): void {
    if (validateUnionType(value, ["string", "number"])) {
        console.log(`✅ Valid input: ${value} (${typeof value})`);
    } else {
        console.log(`❌ Invalid input: ${value} (${typeof value}). Only string or number allowed.`);
    }
}

console.log("\n=== Real-world Usage ===");
processInput("TypeScript is fun");   // Valid
processInput(2026);                  // Valid
processInput(true);                  // Invalid
processInput({});                    // Invalid