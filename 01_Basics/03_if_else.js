// Conditional statements allow JavaScript to make decisions based on conditions. 
// These are used to execute different code blocks depending on whether a condition is true or false.

/*
1. if Statement
👉 Executes a block of code only if the condition is true.

✅ Syntax:
if (condition) {
     Code runs if condition is true
}
*/

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote!");
}
// Output: You are eligible to vote!


/*
2. if...else Statement
👉 Executes one block if true, another if false.

✅ Syntax:
if (condition) {
     Runs if condition is true
} else {
     Runs if condition is false
}

*/

let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!");
} else {
    console.log("The weather is nice.");
}
// Output: It's a hot day!


/*
3. if...else if...else (Multiple Conditions)
👉 Checks multiple conditions and executes the first true block.

✅ Syntax:
if (condition1) {
     Runs if condition1 is true
} else if (condition2) {
     Runs if condition1 is false and condition2 is true
} else {
     Runs if all conditions are false
}
*/

if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition1 is false and condition2 is true
} else {
    // Runs if all conditions are false
}


/*
4. switch Statement (Alternative to if...else if)
👉 Used when there are multiple possible values for a variable.

✅ Syntax:
switch (expression) {
    case value1:
         Code to execute if expression === value1
        break;
    case value2:
         Code to execute if expression === value2
        break;
    default:
         Runs if no cases match
}
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}
// Output: Wednesday
    
