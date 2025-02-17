/*-------------------------------------------*\
|                  ARRAYS                     |
\*------------------------------------------*/

/* 
An array is a special type of object in JavaScript used to store multiple values in a single variable.
An array is a list of items stored in a single variable.
Arrays are ordered collections of elements. 
It is defined using square brackets [].
You can store any type of data: numbers, strings, objects, other arrays, etc.
Each item is called an element, and its position is called an index (starting from 0).
*/

// 📌 Example: Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

/*
Here, fruits is an array with 3 elements.
The index of "Apple" is 0, "Banana" is 1, and "Cherry" is 2.
*/

/*
2️⃣ Accessing Array Elements
You can access elements using their index.

📌 Example: Accessing Elements  
*/
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green
console.log(colors[2]); // Output: Blue

// 📌 Changing Elements
colors[1] = "Yellow";
console.log(colors); // Output: ["Red", "Yellow", "Blue"]


/*
3️⃣ Array Length
.length gives the number of elements in the array.

📌 Example: Length of Array
*/
let cars = ["Toyota", "Honda", "BMW"];
console.log(cars.length); // Output: 3


/*
4️⃣ Adding and Removing Elements
You can add or remove elements using several methods.
*/

// 🔹 push() → Add to the End
cars.push("Mercedes");
console.log(cars); // Output: ["Toyota", "Honda", "BMW", "Mercedes"]

// 🔹 pop() → Remove from the End
cars.pop();
console.log(cars); // Output: ["Toyota", "Honda", "BMW"]

// 🔹 unshift() → Add to the Beginning
cars.unshift("Audi");
console.log(cars); // Output: ["Audi", "Toyota", "Honda", "BMW"]

// 🔹 shift() → Remove from the Beginning
cars.shift();
console.log(cars); // Output: ["Toyota", "Honda", "BMW"]


/*
5️⃣ Concatenating Arrays
.concat() is used to merge two or more arrays.

📌 Example: concat()
*/
let girls = ["Anna", "Ella"];
let boys = ["Tom", "Max"];
let children = girls.concat(boys);
console.log(children); // Output: ["Anna", "Ella", "Tom", "Max"]


/*
6️⃣ Finding Elements in Arrays
There are multiple ways to find elements in an array.
*/

// 🔹 indexOf() → First Occurrence
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30)); // Output: 2

// 🔹 lastIndexOf() → Last Occurrence
let repeated = [1, 2, 3, 2, 1];
console.log(repeated.lastIndexOf(2)); // Output: 3

// 🔹 includes() → Check Existence
console.log(numbers.includes(20)); // Output: true
console.log(numbers.includes(100)); // Output: false

// 🔹 find() → Find First Match
let ages = [18, 22, 25, 30];
let adult = ages.find(age => age >= 21);
console.log(adult); // Output: 22

// 🔹 findIndex() → Index of First Match
let index = ages.findIndex(age => age >= 21);
console.log(index); // Output: 1
