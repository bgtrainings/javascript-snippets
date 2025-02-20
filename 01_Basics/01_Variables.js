// Declaring a constant variable for account ID (cannot be changed after initialization)
const accountId = 12345;

// Declaring a variable using `let`, which allows reassignment
let accountEmail = "bhawna@google.com";

// Declaring a variable using `var`, which allows reassignment (not recommended due to scope issues)
var accountPassword = "123456";

// Declaring a variable without `let`, `var`, or `const`, making it global (not recommended)
accountCity = "Delhi";

// Declaring a variable with `let` but without initialization (default value will be `undefined`)
let accountState;

// Attempting to change `accountId` would cause an error, so it's commented out
// accountId = 21435; // ❌ Not allowed (TypeError)

// Reassigning values to other variables
accountEmail = "bhawna@example.com";
accountPassword = "12121212";
accountCity = "Chennai";

// Assigning a value to `accountState`
accountState = "Tamil Nadu";

// Printing the `accountId`
console.log("Account ID:", accountId);

// Displaying all variables in a tabular format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
