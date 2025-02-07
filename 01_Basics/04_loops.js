/*-------------------------------------------*\
|                 LOOPS                       |
\*------------------------------------------*/

/*
Loops are used to repeat a block of code multiple times until a certain condition is met.
JavaScript has three main types of loops:
✅ for loop
✅ while loop
✅ do...while loop
*/

/*
1. for Loop (When You Know How Many Times to Run the Loop)
👉 Used when you know how many times the loop should run.

✅ Syntax:
for (initialization; condition; update) {
     Code to repeat
}
*/

/*
👉 Initialization → Declares and initializes a variable. (Runs once at the start)
👉 Condition → The loop runs as long as this condition is true.
👉 Update → Changes the variable after each iteration.
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

/*
💡 Explanation:

i = 1 (Start from 1)
i <= 5 (Run loop while i is less than or equal to 5)
i++ (Increase i by 1 after each loop)
*/


/*
2. while Loop (When You Don’t Know How Many Times to Run the Loop)
👉 Used when you don't know how many times the loop should run.

✅ Syntax:
while (condition) {
     Code to repeat
}
*/

// The loop runs while the condition is true.

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;  // Increment i after each loop
}
// Output: 1, 2, 3, 4, 5

/*
💡 Explanation:

The loop runs as long as j <= 5.
j++ increases the value after each iteration.
*/

/*
3. do...while Loop (Runs At Least Once)
👉 Similar to while, but the code runs at least once, even if the condition is false.

✅ Syntax:
do {
     Code to repeat
} while (condition);
*/

// The code inside do runs once before checking the condition.

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 1, 2, 3, 4, 5

/*
💡 Explanation:

The loop runs once before checking i <= 5.
If i > 5 at the start, it still runs once.
*/

// ✅ Example: When Condition is False from the Start
let num = 10;
do {
    console.log(num);
} while (num < 5);
// Output: 10
/*
💡 Explanation:

Even though num < 5 is false, the loop still runs once.
*/

/*
4. Loop Control Statements (break & continue)
These special statements control loop execution.

break (Stops the Loop Completely)
👉 Exits the loop when a certain condition is met.
*/

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Stops the loop when i = 5
    }
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4


/*
continue (Skips One Iteration)
👉 Skips the rest of the code for the current iteration and moves to the next iteration.
*/

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;  // Skips when i = 3
    }
    console.log(i);
}
// Output: 1, 2, 4, 5, 6, 7, 8, 9, 10


/*

Loop Type	            Best Used When	                                    Condition Check
for loop	            You know the number of iterations	                Before each iteration
while loop	            You don't know how many times it will run	        Before each iteration
do...while loop	        You want to run at least once	                    After first iteration

*/

