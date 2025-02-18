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


/*
7️⃣ Transforming Arrays
Change the array's elements using methods like .map(), .filter() and .reduce().
*/

/*
📌 1. .map()
.map() is used to transform each element in an array.

It creates a new array by applying a function to every element of the original array.
It does not change the original array.
*/

// 🔹 Syntax:
let newArray = array.map((element, index, array) => {
    // Return the transformed element
  });

/*
element: Current item being processed.
index (optional): Position of the element in the array.
array (optional): The array on which .map() was called.
*/

// 📌 Example 1: Double Each Number
let numbers1 = [1, 2, 3, 4, 5];
let doubled = numbers1.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

/*
Here, each number is multiplied by 2.
A new array is created with the doubled values.
*/

// 📌 Example 2: Convert to Uppercase
let fruits1 = ["apple", "banana", "cherry"];
let upperFruits = fruits1.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

/*
📌 When to Use .map()?
When you want to transform each element in an array.
When you need a new array with the same number of elements as the original.
*/


/*
📌 2. .filter()
.filter() is used to select specific elements from an array.

It creates a new array with elements that pass a test (return true in the function).
It does not change the original array.
*/

// 🔹 Syntax:
let newArray1 = array.filter((element, index, array) => {
    // Return true to keep the element
  });
  
  
/*
element: Current item being processed.
index (optional): Position of the element in the array.
array (optional): The array on which .filter() was called.
*/

// 📌 Example 1: Filter Even Numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// 📌 Example 2: Filter Long Words
let words = ["apple", "banana", "kiwi", "grape"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords); // Output: ["apple", "banana"]


/*
📌 When to Use .filter()?
When you want to select specific elements based on a condition.
When you need a new array with fewer elements than the original.
*/



/*
📌 3. .reduce()
.reduce() is used to accumulate a value by processing each element of an array.

It reduces the array to a single value (e.g., sum, product, concatenation).
It does not change the original array.
*/

// 🔹 Syntax:
let result = array.reduce((accumulator, element, index, array) => {
    // Return the updated accumulator
  }, initialValue);

  
/*
accumulator: Accumulated value from previous iterations.
element: Current item being processed.
index (optional): Position of the element in the array.
array (optional): The array on which .reduce() was called.
initialValue: Starting value for the accumulator.
*/

// 📌 Example 1: Sum of All Numbers
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

/*
Here, the numbers are added up to get the total sum.
0 is the initial value of the accumulator.
*/

// 📌 Example 2: Multiply All Numbers
let numbers4 = [1, 2, 3, 4];
let product = numbers4.reduce((acc, num) => acc * num, 1);
console.log(product); // Output: 24

/*
Here, the numbers are multiplied together.
1 is the initial value because multiplying by 0 would result in 0.
*/


// 📌 Example 3: Concatenate Strings
let words2 = ["Hello", "World", "!"];
let sentence = words2.reduce((acc, word) => acc + " " + word);
console.log(sentence); // Output: "Hello World !"

/*
📌 When to Use .reduce()?
When you need to accumulate or combine array elements into a single value.
When you need to calculate totals, products, or concatenate elements.
*/