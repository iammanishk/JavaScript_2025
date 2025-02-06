/*--------------------------- BASICS ---------------------------*/

/* ++++++++++++++++++++++++++ VARIABLES ++++++++++++++++++++++++++ */

// Variables are containers for storing data values.


/*
A variable is like a container that stores a value. In JavaScript, you can declare variables using var, let, or const.

1. let (Block-scoped, Can be Reassigned)
Used when the value can change.
Can be updated, but not redeclared in the same block.
Block-scoped (only available inside {} where it is declared).
*/

let name = "Manish";
console.log(name); // Output: John

name = "Anubhav";  // Reassigning is allowed
console.log(name); // Output: Doe

/*
2. const (Block-scoped, Cannot be Reassigned)
Used when the value should not change.
Cannot be reassigned or redeclared.
Must be initialized when declared.
*/

const pi = 3.14;
console.log(pi); // Output: 3.14

/*
3. var (Function-scoped, Can be Reassigned & Redeclared)
The old way of declaring variables (before let and const).
Can be redeclared and reassigned.
Function-scoped (not block-scoped).
*/

var city = "Purnea";
console.log(city); // Output: New York

var city = "Gulabbag"; // Allowed
console.log(city); // Output: Los Angeles
