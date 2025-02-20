// treat all JS Code as newer version
"use strict"

// We are using node.js, not browser
// alert(2 + 5)    // Not Allowed

// Code Readability should be high
console.log(2 + 5); console.log(3 + 6); // Not Preferred

// If you want to study about JavaScript Standards with ECMAScript Documentation, follow this link: https://tc39.es/ecma262/

// Data Types:
// Primitive Data Types → Number, BigInt, String, Boolean, Undefined, Null, Symbol
// Non-Primitive (Reference) Data Types → Object, Array, Function
// Arrays and Functions are technically Objects in JavaScript.

/* ************************************************************ */

// Primitive Data Types:

let num = 42; // Number → Represents numeric values
console.log(typeof num); // "number"

let bigNum = 9007199254740991n; // BigInt → Large integer beyond Number limit
console.log(typeof bigNum); // "bigint"

let name = "Alice"; // String → Represents text data
console.log(typeof name); // "string"

let isActive = true; // Boolean → Represents true or false values
console.log(typeof isActive); // "boolean"

let notAssigned; // Undefined → Variable declared but not assigned a value
console.log(typeof notAssigned); // "undefined"

let emptyValue = null; // Null → Represents an intentional empty value
console.log(typeof emptyValue); // "object" (this is a known JavaScript bug!)

let uniqueId = Symbol("id"); // Symbol → Unique, immutable value often used as object keys
console.log(typeof uniqueId); // "symbol"

/* ************************************************************ */

let person = { name: "John", age: 30 }; // Object → Collection of key-value pairs
console.log(typeof person); // "object"

let fruits = ["Apple", "Banana", "Cherry"]; // Array → Indexed collection (technically an object)
console.log(typeof fruits); // "object"

function greet() { return "Hello!"; } // Function → Block of reusable code (also an object)
console.log(typeof greet); // "function"

/* ************************************************************ */


