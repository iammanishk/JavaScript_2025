//  Logical operators are used to combine multiple conditions and return a true or false value based on the logic.
/*
1. && (AND Operator)
👉 Returns true only if both conditions are true.


Condition 1	Condition 2	Result (&&)
true	    true	    ✅ true
true	    false	    ❌ false
false	    true	    ❌ false
false	    false	    ❌ false

*/

let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter the club.");
} else {
    console.log("Access denied.");
}
// Output: You can enter the club.


/*
2. || (OR Operator)
👉 Returns true if at least one condition is true.


Condition 1  Condition 2   Result (||)  
true            true        ✅ true  
true            false       ✅ true  
false           true        ✅ true  
false           false       ❌ false 

*/

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax today!");
} else {
    console.log("It's a workday.");
}
// Output: You can relax today!


/*
3. ! (NOT Operator)
👉 Reverses the boolean value (true becomes false and vice versa).

Condition	!Condition (NOT)
true	    ❌ false
false	        ✅ true

*/

let isRaining = false;

if (!isRaining) {
    console.log("Go outside and enjoy the sun!");
} else {
    console.log("Stay inside with an umbrella.");
}
// Output: Go outside and enjoy the sun!
