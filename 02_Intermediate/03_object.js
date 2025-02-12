/*-------------------------------------------*\
|                  OBJECTS                    |
\*------------------------------------------*/

/*
In JavaScript, objects are collections of related data and functionalities. They are made up of properties (like variables) and methods (like functions) that describe an item.

1️⃣ What is an Object?
An object is a collection of key-value pairs.

Keys are called properties.
Values can be data (string, number, boolean) or functions (called methods).
📌 Real-Life Example:
Imagine an object as a car:

Properties: Color, Model, Year
Methods: Start, Stop, Honk

*/

/*
2️⃣ Creating an Object
There are several ways to create an object in JavaScript:
*/

// A. Using Object Literal (Easiest Way)
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        console.log("Car is starting...");
    }
};
console.log(car);

