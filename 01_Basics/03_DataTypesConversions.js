let score = "bhawna"; // A string containing non-numeric characters

console.log(typeof score); // "string"
console.log(typeof(score)); // "string" (alternative syntax)

let valueInNumber = Number(score); // Converting a string to a number
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // NaN (Not a Number) because "bhawna" is not convertible to a valid number

// Type Conversion: String to Number
// "33" => 33 (Valid numeric conversion)
// "33abc" => NaN (Invalid number conversion)
// true => 1; false => 0 (Boolean to Number conversion)

let isLoggedIn = "bhawna"; // Non-empty string

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert string to boolean
console.log(booleanIsLoggedIn); // true

// Boolean Conversion Rules:
// 1 => true; 0 => false
// "" (empty string) => false
// "hitesh" (any non-empty string) => true

let someNumber = 33; // Numeric value

let stringNumber = String(someNumber); // Convert number to string
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // "string"

// String Conversion Rules:
// 33 => "33"
// true => "true"
// false => "false"
