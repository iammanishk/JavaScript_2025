/*-------------------------------------------*\
|          STACK AND SHEAP MEMORY             |
\*------------------------------------------*/


/*
📌 Stack Memory vs. Heap Memory in JavaScript (Explained Simply!) 🚀
In JavaScript, when we create variables, objects, or functions, they are stored in memory. There are two types of memory in JavaScript:

1️⃣ Stack Memory (For simple data like numbers, strings, booleans)
2️⃣ Heap Memory (For complex data like objects and arrays)

🔹 1️⃣ What is Stack Memory?
👉 Stack is like a plate stack in a cafeteria – Last In, First Out (LIFO).
👉 It is used for storing simple (primitive) data like number, string, boolean, null, undefined.
👉 It is fast and automatically cleaned up after use.
*/

// Example: Stack Memory
function sayHello() {
    let message = "Hello!";
    console.log(message);
}
sayHello();

//  Here, the variable message is stored in stack memory.   
//  When the function finishes, JavaScript removes message from memory automatically.

/*
🔹 2️⃣ What is Heap Memory?
👉 Heap is like a messy room – data is stored randomly, and we need references (pointers) to access it.
👉 It is used for storing complex (non-primitive) data like objects and arrays.
👉 It is slower than stack memory.
*/


// Example: Heap Memory
let person = {
    name: "Alice",
    age: 25
};

// 🔹 Here, { name: "Alice", age: 25 } is stored in heap memory.
// 🔹 The variable person in stack memory holds a reference (pointer) to the object in the heap.

/*

🔍 Stack vs. Heap (Key Differences)

Feature	                Stack Memory	                                Heap Memory
Type of Data Stored	    Primitive Data (number, string, boolean)	    Non-Primitive Data (objects, arrays, functions)
Speed	                Fast 🚀	                                        Slower 🐢
Memory Cleanup	        Automatically removed when function ends ✅	   Needs manual cleanup (Garbage Collection) ❌
Storage Style	        Stored directly in memory (fixed size)	        Stored dynamically with references
Example	                let age = 25;	                                let obj = { name: "John" };

*/

/*
🎯 Important Concept: Copy vs. Reference
🔹 Stack Variables (Primitive Types) are copied.
🔹 Heap Variables (Objects/Arrays) are referenced (shared).
*/

// 📌 Example of Stack Copy (Primitive Data)
let a = 10;
let b = a;  // Copying value

a = 20;
console.log(b);  // Output: 10 (b is not affected)
// ✅ b gets a copy of a, so changing a does not affect b.



// 📌 Example of Heap Reference (Objects)
let person1 = { name: "Alice" };
let person2 = person1;  // Reference to the same object

person1.name = "Bob";
console.log(person2.name);  // Output: Bob (both point to same memory)

// ❌ Here, person2 does not get a copy. It points to the same object in heap memory.
// ✔ Changing person1 also changes person2.


/*
🛠️ How to Avoid Heap Reference Issues?
Use the spread operator (...) to create a real copy!
*/
// ✅ Correct Way to Copy an Object (Avoid Reference Issue)
let person10 = { name: "Alice" };
let person20 = { ...person10 };  // Real copy, not reference

person10.name = "Bob";
console.log(person20.name);  // Output: Alice (Not affected)

// ✅ Now person2 is a separate object in heap memory.

/*
💡 Summary

Stack Memory	                                                Heap Memory
Used for primitive data (number, string, boolean, etc.)	        Used for non-primitive data (objects, arrays, functions)
Stored directly in stack	                                    Stored in heap, with a reference in stack
Fast and automatically managed	                                Slower and requires garbage collection
Copied when assigned to a new variable	                        Referenced when assigned to a new variable
*/