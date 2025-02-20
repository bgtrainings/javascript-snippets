
// Arithmetic Operators:

console.log("**** Arithmetic Operators ****");

let a = 10, b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.3333 (Division)
console.log(a % b); // 1 (Modulus - Remainder)
console.log(a ** b); // 1000 (Exponentiation a^b)

/* *********************************************** */

// Assignment Operators:

console.log("**** Assignment Operators ****");

let x = 5;
x += 2;  // x = x + 2
console.log(x); // 7

x -= 3;  // x = x - 3
console.log(x); // 4

x *= 2;  // x = x * 2
console.log(x); // 8

x /= 4;  // x = x / 4
console.log(x); // 2

/* *********************************************** */

// Comparison Operators:

console.log("**** Comparison Operators ****");

console.log(10 > 5); // true (Greater than)
console.log(10 < 5); // false (Less than)
console.log(10 >= 10); // true (Greater than or equal)
console.log(10 <= 9); // false (Less than or equal)

console.log(10 == "10"); // true (Equal, type coercion happens)
console.log(10 === "10"); // false (Strict Equal, checks type too)
console.log(10 != "10"); // false (Not equal with coercion)
console.log(10 !== "10"); // true (Strict not equal)

/* *********************************************** */

// Logical Operators:

console.log("**** Logical Operators ****");

let p = true, q = false;

console.log(p && q); // false (AND: Both must be true)
console.log(p || q); // true (OR: At least one must be true)
console.log(!p); // false (NOT: Inverts the value)

/* *********************************************** */

// Bitwise Operators:

console.log("**** Bitwise Operators ****");

console.log(5 & 1); // 1 (Bitwise AND)
console.log(5 | 1); // 5 (Bitwise OR)
console.log(5 ^ 1); // 4 (Bitwise XOR)
console.log(~5); // -6 (Bitwise NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2 (Right shift)

/* *********************************************** */

// Ternary Operators:

console.log("**** Ternary Operators ****");

let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"

/* *********************************************** */

// Type Operators:

console.log("**** Type Operators ****");

console.log(typeof "Hello"); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof null); // "object" (JS quirk)
console.log(typeof undefined); // "undefined"

/* *********************************************** */

// Spread Operators:

console.log("**** Spread Operators ****");

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // Spread operator
console.log(newArr); // [1, 2, 3, 4, 5]

function sum(...numbers) { // Rest operator
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

/* *********************************************** */


