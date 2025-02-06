// In JavaScript, data types define the kind of value a variable can hold. There are 7 main data types:
/*
String
Number
Boolean
Undefined
Null
Object
Array
*/

/*
1. String (Text)
A string is a sequence of characters (letters, numbers, symbols) enclosed in quotes ("" or '' or `` `).
💡 Used for: Names, messages, labels, etc.
*/

let name = "Manish Yadhuvanshi";
let greeting = 'Hello, world!';
let template = `Welcome, ${name}!`; // Template literal (uses backticks)
console.log(name); // Output: John Doe
console.log(template); // Output: Welcome, John Doe!

/*
2. Number (Numbers)
A number can be an integer or a decimal (floating point).
💡 Used for: Age, prices, scores, calculations, etc.
*/

let age = 21; // Integer
let price = 9.99; // Decimal
console.log(age); // Output: 25
console.log(price); // Output: 9.99

/*
3. Boolean (True/False)
A boolean has only two values: true or false.
💡 Used for: Conditions, decisions, on/off states.
*/

let isOnline = true;
let hasPermission = false;
console.log(isOnline); // Output: true
console.log(hasPermission); // Output: false

/*
4. Undefined (Variable Not Assigned a Value)
A variable is undefined if it has been declared but not assigned a value.
💡 Used for: Checking missing data or uninitialized variables.
*/

let user;
console.log(user); // Output: undefined

/*
5. Null (Empty or No Value)
null represents an intentional absence of a value.
💡 Used for: Resetting a variable when no data is available.
*/

let selectedItem = null; // No item is selected
console.log(selectedItem); // Output: null


/*
6. Object (Key-Value Pairs)
An object is a collection of properties (key-value pairs).
💡 Used for: Storing multiple related values (e.g., user data).
*/

let person = {
    name: "Manish",
    age: 21,
    isStudent: true
};
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

/*
7. Array (List of Values)
An array is a special type of object used to store multiple values in a list.
💡 Used for: Storing multiple values (e.g., lists of names, scores).
*/

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: Red
console.log(colors.length); // Output: 3
